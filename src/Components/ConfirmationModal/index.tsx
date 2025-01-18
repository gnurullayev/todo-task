import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  content?: string;
  deleteData: (id: string) => void;
}

const { confirm } = Modal;

function DeleteConfirmationModal({ id, title, content, deleteData }: Props) {
  const navigate = useNavigate();
  const showPromiseConfirm = () => {
    confirm({
      title: `${title}ni o'chirib tashlamoqchmisiz ?`,
      icon: <ExclamationCircleFilled />,
      content: content
        ? content
        : `Agar siz ha tugmasini tanlasangiz ${title} o'chirib tashlanadi`,
      onOk() {
        deleteData(String(id));
        return null;
      },
      okText: "Ha",
      cancelText: "Yo'q",
      onCancel() {},
    });
  };
  return (
    <Button danger onClick={() => showPromiseConfirm()}>
      O'chirish
    </Button>
  );
}

export default DeleteConfirmationModal;
