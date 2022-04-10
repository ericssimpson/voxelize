use actix::prelude::*;

use crate::app::world::World;

use super::models;

#[derive(Clone, Message, Default)]
#[rtype(result = "()")]
pub struct ClientMessage {
    pub world_name: String,
    pub client_id: String,
    pub data: models::Message,
}

#[derive(Clone, Message)]
#[rtype(result = "()")]
pub struct CreateWorld {
    pub world: World,
}

#[derive(Clone, Message)]
#[rtype(result = "String")]
pub struct JoinWorld {
    pub world_name: String,
    pub recipient: Recipient<models::Message>,
}

#[derive(Clone, Message)]
#[rtype(result = "()")]
pub struct LeaveWorld {
    pub world_name: String,
    pub client_id: String,
}
