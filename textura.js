particles = Entities.addEntity({
    type: "ParticleEffect",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.5, z: -4 })),
    lifespan: 5,
    emitRate: 10,
    emitSpeed: 0.02,
    speedSpread: 0.01,
    emitAcceleration: { x: 0, y: 0.02, z: 0 },
    polarFinish: Math.PI,
    textures: "https://content.vircadia.com/eu-c-1/vircadia-assets/interface/default/default_particle.png",
    particleRadius: 0.1,
    color: { red: 0, green: 255, blue: 0 },
    alphaFinish: 0,
    lifetime: 300  // Delete after 5 minutes.
});
