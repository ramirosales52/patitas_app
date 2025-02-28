import { Image } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;
  return (
    <Image
      source={imageSource}
      className="h-full w-full flex-1"
      resizeMode="contain"
    />
  );
}