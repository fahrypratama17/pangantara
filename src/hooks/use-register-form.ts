import { useRegisterMutation } from "@/shared/repository/register/query";
import { useRegisterStore } from "@/shared/store/useRegisterStore";

export const useRegisterForm = () => {
  const { mutate, isPending } = useRegisterMutation();
  const state = useRegisterStore();

  const handleSubmit = () => {
    if (state.password !== state.confirmPassword) {
      return;
    }

    mutate({
      name: state.name,
      email: state.email,
      password: state.password,
      confirm_password: state.confirmPassword,
      role: state.role,
    });
  };

  return {
    state,
    handleSubmit,
    isPending,
  };
};
