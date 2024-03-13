import merge from "deepmerge";
import * as THREE from "three";

import { RigidControls } from "../core/controls";
import { Inputs } from "../core/inputs";

import { ARM_COLOR } from "./character";

export type HudOptions = {
  visible: boolean;
};

const defaultOptions: HudOptions = {
  visible: true,
};

const ARM_POSITION = new THREE.Vector3(1, -1, -1);
const ARM_QUATERION = new THREE.Quaternion().setFromEuler(
  new THREE.Euler(-Math.PI / 4, 0, -Math.PI / 8)
);
const BLOCK_POSITION = new THREE.Vector3(1, -1.8, -2);
const BLOCK_QUATERNION = new THREE.Quaternion().setFromAxisAngle(
  new THREE.Vector3(0, 1, 0),
  -Math.PI / 4
);

export class Hud {
  public options: HudOptions;

  public mesh: THREE.Object3D;

  public controls: RigidControls;

  private mixer: THREE.AnimationMixer;

  private armSwingClip: THREE.AnimationClip;

  private blockSwingClip: THREE.AnimationClip;

  private swingAnimation: THREE.AnimationAction;

  private placeAnimation: THREE.AnimationAction;

  constructor(options: Partial<HudOptions> = {}) {
    this.options = merge(defaultOptions, options);

    this.armSwingClip = this.generateSwingClip(
      ARM_POSITION,
      ARM_QUATERION,
      "armSwing"
    );
    this.blockSwingClip = this.generateSwingClip(
      BLOCK_POSITION,
      BLOCK_QUATERNION,
      "blockSwing"
    );

    this.setArmMesh();
  }

  /**
   * Connect the HUD to the given input manager. This will allow the HUD to listen to left
   * and right clicks to play HUD animations. This function returns a function that when called
   * unbinds the HUD's keyboard inputs.
   *
   * @param inputs The {@link Inputs} instance to bind the HUD's keyboard inputs to.
   * @param namespace The namespace to bind the HUD's keyboard inputs to.
   */
  public connect = (inputs: Inputs, namespace = "*") => {
    const unbindLeftClick = inputs.click("left", this.playSwing, namespace);
    const unbindRightClick = inputs.click("right", this.playPlace, namespace);

    return () => {
      try {
        unbindLeftClick();
        unbindRightClick();
      } catch (e) {
        // Ignore.
      }
    };
  };

  /**
   * Set a new mesh for the HUD. If `animate` is true, the transition will be animated.
   *
   * @param mesh New mesh for the HUD
   * @param animate Whether to animate the transition
   */
  public setMesh = (mesh: THREE.Object3D | undefined, animate: boolean) => {
    if (!animate) {
      if (this.controls && this.mesh) {
        this.controls.camera.remove(this.mesh);
      }

      if (!mesh) {
        this.setArmMesh();
      } else {
        this.setBlockMesh(mesh);
      }

      if (this.controls && this.mesh instanceof THREE.Object3D) {
        this.controls.camera.add(this.mesh);
      }
    } else {
      // TODO: Create animation of arm coming down and coming back up
    }
  };

  private setArmMesh = () => {
    const color = new THREE.Color(ARM_COLOR);
    const geometry = new THREE.BoxGeometry(0.3, 1, 0.3);
    const material = new THREE.MeshBasicMaterial({
      color,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(ARM_POSITION.x, ARM_POSITION.y, ARM_POSITION.z);
    this.mesh.quaternion.multiply(ARM_QUATERION);

    this.mixer = new THREE.AnimationMixer(this.mesh);
    this.swingAnimation = this.mixer.clipAction(this.armSwingClip);
    this.swingAnimation.setLoop(THREE.LoopOnce, 1);
    this.swingAnimation.clampWhenFinished = true;
  };

  private setBlockMesh = (mesh: THREE.Object3D) => {
    this.mesh = mesh;
    this.mesh.position.set(
      BLOCK_POSITION.x,
      BLOCK_POSITION.y,
      BLOCK_POSITION.z
    );
    mesh.quaternion.multiply(BLOCK_QUATERNION);

    this.mixer = new THREE.AnimationMixer(this.mesh);
    this.swingAnimation = this.mixer.clipAction(this.blockSwingClip);
    this.swingAnimation.setLoop(THREE.LoopOnce, 1);
    this.swingAnimation.clampWhenFinished = true;
  };

  /**
   * Generates a "swinging" animation clip.
   *
   * @param pInitial Initial position
   * @param qInitial Initial quaternion
   * @param name Name of the clip
   * @returns Animation clip of the mesh "swinging"
   */
  private generateSwingClip = (
    pInitial: THREE.Vector3,
    qInitial: THREE.Quaternion,
    name: string
  ) => {
    const timestamps = [0, 0.05, 0.1, 0.15, 0.2, 0.3];

    const pMid = pInitial.clone();
    pMid.x -= 0.34;
    pMid.y += 0.23;
    const pMid2 = pMid.clone();
    pMid2.y -= 0.25;
    const pMid3 = pMid2.clone();
    pMid3.y -= 0.68;
    const pMid4 = pInitial.clone();
    pMid4.y -= 0.3;
    const positionKF = new THREE.VectorKeyframeTrack(".position", timestamps, [
      pInitial.x,
      pInitial.y,
      pInitial.z,
      pMid.x,
      pMid.y,
      pMid.z,
      pMid2.x,
      pMid2.y,
      pMid2.z,
      pMid3.x,
      pMid3.y,
      pMid3.z,
      pMid4.x,
      pMid4.y,
      pMid4.z,
      pInitial.x,
      pInitial.y,
      pInitial.z,
    ]);
    const qMid = qInitial.clone();
    qMid.x -= qInitial.x + 0.41;
    qMid.z += 0.21 - qInitial.z;
    const qMid2 = qMid.clone();
    qMid2.z += 0.31;
    const qMid3 = qMid2.clone();
    qMid3.z += 0.23;
    const qMid4 = qInitial.clone();

    const quaternionKF = new THREE.QuaternionKeyframeTrack(
      ".quaternion",
      timestamps,
      [
        qInitial.x,
        qInitial.y,
        qInitial.z,
        qInitial.w,
        qMid.x,
        qMid.y,
        qMid.z,
        qMid.w,
        qMid2.x,
        qMid2.y,
        qMid2.z,
        qMid2.w,
        qMid3.x,
        qMid3.y,
        qMid3.z,
        qMid3.w,
        qMid4.x,
        qMid4.y,
        qMid4.z,
        qMid4.w,
        qInitial.x,
        qInitial.y,
        qInitial.z,
        qInitial.w,
      ]
    );

    return new THREE.AnimationClip(name, 0.3, [positionKF, quaternionKF]);
  };

  /**
   *
   * Update the arm's animation. Note that when a hud is attached to a control,
   * `update` is called automatically within the control's update loop.
   */
  public update(delta: number) {
    this.mixer.update(delta);
  }

  /**
   * Play the "swing" animation.
   */
  private playSwing = () => {
    this.swingAnimation.reset();
    this.swingAnimation.play();
  };

  /**
   * Play the "place" animation.
   */
  private playPlace = () => {
    this.placeAnimation.reset();
    this.placeAnimation.play();
  };
}
