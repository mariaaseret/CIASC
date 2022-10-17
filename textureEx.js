var entity = Entities.addEntity({
    type: "PolyLine",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.75, z: -5 })),
    rotation: MyAvatar.orientation,
    linePoints: [
        { x: -1, y: 0.5, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 0.5, z: 0 }
    ],
    normals: [
        { x: 0, y: 0, z: 1 },
        { x: 0, y: 0, z: 1 },
        { x: 0, y: 0, z: 1 }
    ],
    strokeWidths: [ 0.1, 0.1, 0.1 ],
    color: { red: 255, green: 0, blue: 0 },  // Use just the red channel from the image.
    textures: "https://cdn-1.vircadia.com/us-e-1/DomainContent/Toybox/flowArts/trails.png",
    isUVModeStretch: true,
    lifetime: 300  // Delete after 5 minutes.
});
