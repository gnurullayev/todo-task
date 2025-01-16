import { Form } from "@/Components/common/Form";
import { Input } from "@/Components/common/Input";
import { Textarea } from "@/Components/common/Textarea";
import { FormParams } from "@/interfaces";
import { ICategory } from "@/interfaces/category";

interface Params extends FormParams {
  initialData: ICategory;
}

const CategoryForm = ({ initialData, mode, formFooter }: Params) => {
  const onFinish = (data: any) => {};

  return (
    <Form initialValues={initialData} onFinish={onFinish}>
      <Input name="name" label="Name" mode={mode} />

      <Input name="short_content" label="Qisqa tarif" mode={mode} />
      <Textarea
        name="description"
        label="Description"
        mode={mode}
        list={false}
      />

      {mode === "edit" && (
        <Input name="link" label="Category uchun link" mode={mode} />
      )}

      <Input isHidden={true} name="id" mode={mode} />
      {formFooter}
    </Form>
  );
};

export default CategoryForm;
