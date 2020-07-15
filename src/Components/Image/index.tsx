import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Area } from "react-easy-crop/types";

import Button from "../Button";
import getCroppedImg from "./cropImage";
import ImgUploadButton from "./ImgUploadButton";

import {
  Container,
  Label,
  ImageContainer,
  ButtonsContainer,
  CropperContainer,
} from "./style";

interface IProps {
  label: string;
  buttonLabel: string;
  buttonEditLabel: string;
  buttonRemoveLabel: string;
  buttonSelectLabel: string;
  value: string;
  setValue: (value: string) => void;
}

const ProfileImage: React.FC<IProps> = ({
  label,
  buttonLabel,
  buttonEditLabel,
  buttonRemoveLabel,
  buttonSelectLabel,
  value,
  setValue,
}) => {
  const [selectedImageBase64, setSelectedImageBase64] = useState<string>("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();

  const onCrop = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onSelectImage = useCallback((target: HTMLInputElement) => {
    if (!target.files || !target.files[0]) return;

    const file = target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setSelectedImageBase64(reader.result as string);
    });

    reader.readAsDataURL(file);
  }, []);

  const onComplete = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        selectedImageBase64,
        croppedAreaPixels as Area,
      );
      setValue(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, selectedImageBase64, setValue]);

  const reset = useCallback(() => {
    setSelectedImageBase64("");
    setValue("");
  }, [setValue]);

  const edit = useCallback(() => {
    setValue("");
  }, [setValue]);

  const firstStageButtons = useCallback(() => {
    const hasImageSelected = !!selectedImageBase64;
    const hasImageCropped = !!value;

    if (!hasImageSelected || hasImageCropped) return;

    return (
      <>
        <Button
          aria-label="Remove Profile Picture"
          name="removeProfileImage"
          onClick={reset}
          type="button"
          color="red"
        >
          {buttonRemoveLabel}
        </Button>
        <Button
          aria-label="Select Profile Image"
          name="selectProfileImage"
          onClick={onComplete}
          type="button"
        >
          {buttonSelectLabel}
        </Button>
      </>
    );
  }, [
    buttonRemoveLabel,
    buttonSelectLabel,
    onComplete,
    reset,
    selectedImageBase64,
    value,
  ]);

  const secondStageButtons = useCallback(() => {
    const hasImageCropped = !!value;

    if (!hasImageCropped) return;

    return (
      <>
        <Button
          aria-label="Remove Profile Picture"
          name="removeProfileImage"
          onClick={reset}
          type="button"
          color="red"
        >
          {buttonRemoveLabel}
        </Button>
        <Button
          aria-label="Edit Profile Picture"
          name="editProfileImage"
          onClick={edit}
          type="button"
        >
          {buttonEditLabel}
        </Button>
      </>
    );
  }, [buttonEditLabel, buttonRemoveLabel, edit, reset, value]);

  return (
    <Container>
      <Label>{label}</Label>
      <ImageContainer>
        {!selectedImageBase64 && (
          <ImgUploadButton label={buttonLabel} setValue={onSelectImage} />
        )}
        {selectedImageBase64 && !value && (
          <CropperContainer>
            <Cropper
              image={selectedImageBase64}
              crop={crop}
              zoom={zoom}
              onCropChange={setCrop}
              onCropComplete={onCrop}
              onZoomChange={setZoom}
              aspect={1}
            />
          </CropperContainer>
        )}
        {value && <img src={value} alt="" />}
        {(selectedImageBase64 || value) && (
          <ButtonsContainer>
            {firstStageButtons()}
            {secondStageButtons()}
          </ButtonsContainer>
        )}
      </ImageContainer>
    </Container>
  );
};

export default ProfileImage;
