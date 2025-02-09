import { IForm } from './blog.interface';
import { Blogs } from './blog.model';

const createBlog = async (payload: IForm) => {
  const result = await Blogs.create(payload);
  return result;
};
const findAllBlogs = async () => {
  const result = await Blogs.find();
  return result;
};
const updateBlog = async (id: string, payload: IForm) => {
  const isBlogExist = await Blogs.findById(id);
  if (!isBlogExist) {
    throw new Error('Blog is not exist');
  }
  const result = await Blogs.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteBlog = async (id: string) => {
  const blog = await Blogs.findById(id);
  if (!blog) {
    throw new Error('Blog does not exist');
  }
  return await Blogs.findByIdAndDelete(id);
};
export const blogServices = {
  createBlog,
  deleteBlog,
  updateBlog,
  findAllBlogs,
};
