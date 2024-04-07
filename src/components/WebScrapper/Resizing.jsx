// import sharp from 'sharp';

function Resizing(imageUrl) {
    return new Promise((resolve, reject) => {
        sharp(imageUrl)
            .resize({
                width: 478,
                height: 400,
                fit: 'contain',
                position: 'center',
                // background: { r: 255, g: 0, b: 0, alpha: 0.25 }
            })
            .toBuffer((err, buffer) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(buffer.toString('base64'));
                }
            });
    });
}

export default Resizing;