import React, { ChangeEvent, useState } from 'react';

interface ImagePickerProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  imageSize: number; // Desired size for both width and height of the displayed image
}

export default function ImagePicker({ onChange, imageSize }: ImagePickerProps): JSX.Element {
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];

    if (!file) {
      console.warn('No image selected');
      setSelectedImageSrc(null);
      return;
    }

    if (!file.type.match('image/*')) {
      console.warn('Invalid file type. Please select an image.');
      setSelectedImageSrc(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImageSrc(e.target?.result as string); // Set the selected image source
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ width: '18rem', height: '18rem', overflow: 'hidden' }}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImageSrc && (
        <img src={selectedImageSrc} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      )}
    </div>
  );
}
