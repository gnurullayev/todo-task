import { Checkbox } from "@/Components/common/Checkbox";
import { Form } from "@/Components/common/Form";
import { Input } from "@/Components/common/Input";
import { Select } from "@/Components/common/Select";
import { Textarea } from "@/Components/common/Textarea";
import { FormParams } from "@/interfaces";
import { IProduct } from "@/interfaces/product";

interface Params extends FormParams {
  initialData: IProduct;
}

const ProductForm = ({ initialData, mode, formFooter, mutate }: Params) => {
  const onFinish = (data: any) => {
    if (mutate) mutate(data);
  };

  return (
    <Form initialValues={initialData} onFinish={onFinish}>
      <Input name="title" label="Mahsulot nomi" mode={mode} />
      <Select
        name="type"
        label="Mahsulot turi"
        customMode={mode}
        list={false}
        dataSource={[]}
        rules={[
          {
            required: false,
            message: "Iltimos mahsulot turini tanlang",
          },
        ]}
      />
      <Input type="number" name="price" label="Mahsulot narxi" mode={mode} />

      <Textarea
        name="description"
        label="Mahsulot haqida ma'lumot"
        mode={mode}
        list={false}
      />

      <Checkbox
        name="is_active"
        label="Mahsulot statusi"
        mode={mode}
        checked={initialData.is_active}
      />

      <Input isHidden={true} name="id" mode={mode} />
      {formFooter}
    </Form>
  );
};

export default ProductForm;
