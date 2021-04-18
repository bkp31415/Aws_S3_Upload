module.exports = mongoose => {
    const fileupload = mongoose.model(
      "fileUpload",
      mongoose.Schema(
        {
          title: String,
          description: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return fileupload;
  };