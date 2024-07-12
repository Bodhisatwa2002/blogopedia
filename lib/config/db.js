import mongoose from "mongoose";
export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://bodhisatwa:Bodhisatwa2002@cluster0.fr2odwu.mongodb.net/blogopedia"
  );
  console.log("DB Connected");
};
