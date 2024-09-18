import mongoose, { Model, model, Schema } from 'mongoose';

interface IWhiteList extends Document{
    wallet?: string;
}

interface IWhiteListModel extends Model<IWhiteList>{}

const WhiteListSchema: Schema<IWhiteList> = new mongoose.Schema({
    wallet: {type: String, required: true}
})

const WhiteList: IWhiteListModel =  mongoose.models.WhiteList || model<IWhiteList, IWhiteListModel>("WhiteList", WhiteListSchema);

export default WhiteList;

