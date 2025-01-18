import { Checkbox } from "@/Components/common/Checkbox";
import { Form } from "@/Components/common/Form";
import { Input } from "@/Components/common/Input";
import { FormParams } from "@/interfaces";
import { ICategory } from "@/interfaces/category";

interface Params extends FormParams {
  initialData: ICategory;
}

const CategoryForm = ({ initialData, mode, formFooter, mutate }: Params) => {
  const onFinish = (data: any) => {
    const newCategory = { ...data, id: data.id ? data.id : Date.now() };
    if (mutate) mutate(newCategory);
  };

  return (
    <Form initialValues={initialData} onFinish={onFinish}>
      <Input
        name="name"
        label="Kategoriya nomi"
        mode={mode}
        rules={[
          {
            required: true,
            message: "Iltimos kategoriya nomini kiriting",
          },
        ]}
      />

      <Checkbox
        name="is_active"
        label="Kategory holati"
        mode={mode}
        checked={initialData.is_active}
      />

      <Input isHidden={true} name="id" mode={mode} />
      {formFooter}
    </Form>
  );
};

export default CategoryForm;
