import { Checkbox } from "@/Components/common/Checkbox";
import { Form } from "@/Components/common/Form";
import { Input } from "@/Components/common/Input";
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

      <Checkbox
        name="is_active"
        label="Kategory statusi"
        mode={mode}
        checked={initialData.is_active}
      />

      <Input isHidden={true} name="id" mode={mode} />
      {formFooter}
    </Form>
  );
};

export default CategoryForm;
