import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, message, Modal } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  deletePromiseFn: any;
  title: string;
  content?: string;
  redirectPath?: string;
}

const { confirm } = Modal;

function DeleteConfirmationModal({
  id,
  deletePromiseFn,
  title,
  content,
  redirectPath,
}: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const showPromiseConfirm = ({
    id,
    deletePromiseFn,
    title = "Ma'lumot",
    content,
    redirectPath,
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
          deletePromiseFn,
          title,
          content,
          redirectPath,
        })
      }
    >
      {t("Buttons.delete")}
    </Button>
  );
}

export default DeleteConfirmationModal;
