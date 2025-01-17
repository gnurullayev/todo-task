import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type KeyType = "products" | "category";

interface Props {
  id: string;
  title: string;
  content?: string;
  redirectPath?: string;
  key: KeyType;
}

const { confirm } = Modal;

function DeleteConfirmationModal({
  id,
  title,
  content,
  redirectPath,
  key,
}: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const showPromiseConfirm = ({
    id,
    title = "Ma'lumot",
    content,
    key,
  }: Props) => {
    confirm({
      title: `${title}ni o'chirib tashlamoqchmisiz ?`,
      icon: <ExclamationCircleFilled />,
      content: content
        ? content
        : `Agar siz ha tugmasini tanlasangiz ${title} o'chirib tashlanadi`,
      onOk() {
        return null;
      },
      okText: "Ha",
      cancelText: "Yo'q",
      onCancel() {},
    });
  };
  return (
    <Button
      danger
      onClick={() =>
        showPromiseConfirm({
          id,
          title,
          content,
          redirectPath,
          key,
        })
      }
    >
      O'chirish
    </Button>
  );
}

export default DeleteConfirmationModal;
