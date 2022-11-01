---
id: "Character"
title: "Class: Character"
sidebar_label: "Character"
sidebar_position: 0
custom_edit_url: null
---

The default Voxelize character. This can be used in `Peers.createPeer` to apply characters onto
multiplayer peers. This can also be **attached** to a `RigidControls` instance to have a character
follow the controls.

When `character.set` is called, the character's head will be lerp to the new rotation first, then the
body will be lerp to the new rotation. This is to create a more natural looking of character rotation.

# Example
```ts
const character = new VOXELIZE.Character();

// Set the nametag content.
character.username = "<placeholder>";

// Load a texture to paint on the face.
world.loader.addTexture(FunnyImageSrc, (texture) => {
  character.head.paint("front", texture);
})

// Attach the character to a rigid controls.
controls.attachCharacter(character);
```

![Character](/img/character.png)

<p style={{textAlign: "center", color: "gray", fontSize: "0.8rem"}}>A character with a funny face</p>

## Hierarchy

- `Group`

  ↳ **`Character`**

## Properties

### params

• **params**: [`CharacterParams`](../modules.md#characterparams-198)

Parameters to create a Voxelize character.

___

### headGroup

• **headGroup**: `Group`

The sub-mesh holding the character's head.

___

### bodyGroup

• **bodyGroup**: `Group`

The sub-mesh holding the character's body.

___

### leftArmGroup

• **leftArmGroup**: `Group`

The sub-mesh holding the character's left arm.

___

### rightArmGroup

• **rightArmGroup**: `Group`

The sub-mesh holding the character's right arm.

___

### leftLegGroup

• **leftLegGroup**: `Group`

The sub-mesh holding the character's left leg.

___

### rightLegGroup

• **rightLegGroup**: `Group`

The sub-mesh holding the character's right leg.

___

### head

• **head**: [`CanvasBox`](CanvasBox.md)

The actual head mesh as a paint-able `CanvasBox`.

___

### body

• **body**: [`CanvasBox`](CanvasBox.md)

The actual body mesh as a paint-able `CanvasBox`.

___

### leftArm

• **leftArm**: [`CanvasBox`](CanvasBox.md)

The actual left arm mesh as a paint-able `CanvasBox`.

___

### rightArm

• **rightArm**: [`CanvasBox`](CanvasBox.md)

The actual right arm mesh as a paint-able `CanvasBox`.

___

### leftLeg

• **leftLeg**: [`CanvasBox`](CanvasBox.md)

The actual left leg mesh as a paint-able `CanvasBox`.

___

### rightLeg

• **rightLeg**: [`CanvasBox`](CanvasBox.md)

The actual right leg mesh as a paint-able `CanvasBox`.

___

### nametag

• **nametag**: [`NameTag`](NameTag.md)

The nametag of the character that floats right above the head.

___

### speed

• **speed**: `number` = `0`

The speed where the character has detected movements at. When speed is 0, the
arms swing slowly in idle mode, and when speed is greater than 0, the arms swing
faster depending on the passed-in parameters.

___

### newPosition

• **newPosition**: `Vector3`

The new position of the character. This is used to lerp the character's position

___

### newBodyDirection

• **newBodyDirection**: `Quaternion`

The new body direction of the character. This is used to lerp the character's body rotation.

___

### newDirection

• **newDirection**: `Quaternion`

The new head direction of the character. This is used to lerp the character's head rotation.

___

### onMove

• **onMove**: () => `void`

#### Type declaration

▸ (): `void`

A listener called when a character starts moving.

##### Returns

`void`

___

### onIdle

• **onIdle**: () => `void`

#### Type declaration

▸ (): `void`

A listener called when a character stops moving.

##### Returns

`void`

## Constructors

### constructor

• **new Character**(`params?`)

Create a new Voxelize character.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Partial`<[`CharacterParams`](../modules.md#characterparams-198)\> | Parameters to create a Voxelize character. |

#### Overrides

Group.constructor

## Methods

### update

▸ **update**(): `void`

Update the character's animation and rotation. After `set` is called, `update` must be called to
actually lerp to the new position and rotation. Note that when a character is attached to a control,
`update` is called automatically within the control's update loop.

#### Returns

`void`

___

### set

▸ **set**(`position`, `direction`): `void`

Set the character's position and direction that its body is situated at and the head is looking
at. This uses `MathUtils.directionToQuaternion` to slerp the head's rotation to the new direction.

The `update` needs to be called to actually lerp to the new position and rotation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `number`[] | The new position of the character. |
| `direction` | `number`[] | The new direction of the character. |

#### Returns

`void`

## Accessors

### username

• `get` **username**(): `string`

Get the content of the nametag of the character.

#### Returns

`string`

• `set` **username**(`username`): `void`

Change the content of the user's nametag. If the nametag is empty, nothing will be rendered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`void`

___

### eyeHeight

• `get` **eyeHeight**(): `number`

Get the height at which the eye of the character is situated at.

#### Returns

`number`

___

### totalHeight

• `get` **totalHeight**(): `number`

Get the total height of the character, in other words, the sum of the heights of
the head, body, and legs.

#### Returns

`number`