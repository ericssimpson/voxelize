use specs::{Component, VecStorage};

use crate::vec::Vec3;

/// The direction this entity is positioned.
#[derive(Default, Component)]
#[storage(VecStorage)]
pub struct HeadingComp(pub Vec3<f32>);

impl HeadingComp {
    /// Create a new component of the position this entity is at.
    pub fn new(x: f32, y: f32, z: f32) -> Self {
        Self(Vec3(x, y, z))
    }
}