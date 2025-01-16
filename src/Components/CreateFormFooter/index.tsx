import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../common/Button";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

interface Props {
  cancelPath: string;
  createdPath: string;
  isSuccess: boolean;
}

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const CreateFormFooter: FC<Props> = ({
  isSuccess,
  cancelPath,
  createdPath,
}) => {
  const navigate = useNavigate();
  const onCancel = () => {
    navigate(cancelPath);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Ma'lumot saqlandi");
      setTimeout(() => {
        navigate(createdPath);
      }, 1000);
    }
  }, [isSuccess]);

  return (
    <Wrapper>
      <Button htmlType="submit" type="primary" label={"Bekor qilish"} />

      <Button
        htmlType="button"
        type="default"
        onClick={onCancel}
        label={"Bekor qilish"}
      />
    </Wrapper>
  );
};

export default CreateFormFooter;
