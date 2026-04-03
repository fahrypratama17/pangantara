"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import type { TResetPasswordRequest } from "@/feature/auth/resetPassword/types/schema";
import { useDebounce } from "@/hooks/use-debounce";
import { showResetPasswordToast } from "@/shared/component/toast";
import { useResetPasswordMutation } from "@/shared/repository/reset-password/query";

const initialForm: Omit<TResetPasswordRequest, "token"> = {
  new_password: "",
  confirm_password: "",
};

export const useResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token")?.trim() ?? "";
  const [form, setForm] = useState(initialForm);
  const { mutate, isPending } = useResetPasswordMutation();
  const debouncedPassword = useDebounce(form.new_password, 500);
  const debouncedConfirmPassword = useDebounce(form.confirm_password, 500);

  useEffect(() => {
    if (!debouncedPassword && !debouncedConfirmPassword) {
      return;
    }

    if (debouncedPassword && debouncedPassword.length < 8) {
      showResetPasswordToast("passwordMinLength");
      return;
    }

    if (debouncedPassword.length > 50) {
      showResetPasswordToast("passwordMaxLength");
      return;
    }

    if (
      debouncedConfirmPassword &&
      debouncedPassword !== debouncedConfirmPassword
    ) {
      showResetPasswordToast("passwordMismatch");
    }
  }, [debouncedPassword, debouncedConfirmPassword]);

  const setField = (field: keyof typeof initialForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange =
    (field: keyof typeof initialForm) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setField(field, event.target.value);
    };

  const handleSubmit = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (!token) {
      showResetPasswordToast("tokenRequired");
      return;
    }

    if (!form.new_password.trim()) {
      showResetPasswordToast("passwordRequired");
      return;
    }

    if (!form.confirm_password.trim()) {
      showResetPasswordToast("confirmPasswordRequired");
      return;
    }

    if (form.new_password.length < 8) {
      showResetPasswordToast("passwordMinLength");
      return;
    }

    if (form.new_password.length > 50) {
      showResetPasswordToast("passwordMaxLength");
      return;
    }

    if (form.new_password !== form.confirm_password) {
      showResetPasswordToast("passwordMismatch");
      return;
    }

    mutate({
      token,
      new_password: form.new_password,
      confirm_password: form.confirm_password,
    });
  };

  return {
    form,
    isPending,
    token,
    setField,
    handleInputChange,
    handleSubmit,
  };
};

