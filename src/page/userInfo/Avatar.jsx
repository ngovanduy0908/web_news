import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import Test from "../../components/ShareSocial/ShareFaceBook";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { supabase } from "../../libs/supbase.js";
const defaltImg =
  "https://doanhnhanthanhhoahanoi.com/themes/default/images/users/no_avatar.png?fbclid=IwAR338fL6RIzbS6D7bPRRwrwdTnvJbePi4du2t5x47ei63BYmnz4CM_-VRfo";
const SUPABASE_BUCKET = process.env.SUPABASE_BUCKET || "";

export default function AvatarUser() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [avatarPreviewUrl, setAvatarPreviewUrl] = useState(defaltImg);
  const [a, setA] = useState(0);
  const onDrop = useCallback((acceptedFiles) => {
    setValue("avatar", acceptedFiles[0]);
    setAvatarPreviewUrl(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onSubmit = (data) => {
    // handle form submission here
    console.log(data);
  };

  const [crop, setCrop] = useState({ aspect: 1 });
  const [image, setImage] = useState(null);

  const onImageLoaded = (image) => {
    setImage(image);
  };

  const onCropComplete = (crop, pixelCrop) => {};

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const handleUpload = async (e) => {
    let file;
    if (e.target.files) {
      file = e.target.files[0];
    }
    const { data, error } = await supabase.storage
      .from(SUPABASE_BUCKET)
      .upload("images/" + file?.name, file);
    if (data) {
      console.log("Thanh cong: ", data);
    } else {
      console.log("That bai: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[100px] h-[100px] ">
        {avatarPreviewUrl && (
          <img
            src={avatarPreviewUrl}
            alt="Avatar preview"
            className="w-full h-full object-cover center"
          />
        )}
      </div>
      <div className="flex items-center gap-3 mt-2">
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <button className="bg-[#428bca] text-white text-[12px] px-2 py-1 rounded-md">
            Thay đổi hình đại điện
          </button>
        </div>
        <div>
          <button className="bg-red-600 text-white text-[12px] px-2 py-1 rounded-md">
            Xóa
          </button>
        </div>
      </div>
      <input type="file" accept="image/*" onChange={(e) => handleUpload(e)} />
      <button type="submit">Submit</button>
    </form>
  );
}
