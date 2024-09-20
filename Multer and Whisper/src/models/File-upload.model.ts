import {
    getModelForClass,
    modelOptions,
    prop,
    Severity,
    index,
  } from "@typegoose/typegoose";


@index({ name: 1 })
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})


export class UploadFile {
  @prop({  required: true })
  file_name: string;
 


  @prop({ default: true, required: false })
  status: boolean;


} 

const UploadFileModel = getModelForClass(UploadFile);

export default UploadFileModel;