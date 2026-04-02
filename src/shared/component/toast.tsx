import { toast } from "sonner";

type ToastType = "error" | "warning";

type ToastConfig = {
  type: ToastType;
  id: string;
  title: string;
  description: string;
};

export type PasswordToastKey =
  | "passwordRequired"
  | "confirmPasswordRequired"
  | "passwordMinLength"
  | "passwordMaxLength"
  | "passwordMismatch";

export type RegisterRequiredToastKey =
  | "nameRequired"
  | "addressRequired"
  | "emailRequired";

export type LoginToastKey =
  | "loginEmailRequired"
  | "loginEmailInvalid"
  | "loginPasswordRequired";

const passwordToastMap: Record<PasswordToastKey, ToastConfig> = {
  passwordRequired: {
    type: "error",
    id: "register-password-required",
    title: "Password Tidak Boleh Kosong!",
    description: "Masukkan password terlebih dahulu.",
  },
  confirmPasswordRequired: {
    type: "error",
    id: "register-confirm-password-required",
    title: "Konfirmasi password Tidak Boleh Kosong!",
    description: "Masukkan konfirmasi password terlebih dahulu.",
  },
  passwordMinLength: {
    type: "error",
    id: "register-password-min-length",
    title: "Password terlalu pendek",
    description: "Password minimal 8 karakter.",
  },
  passwordMaxLength: {
    type: "warning",
    id: "register-password-max-length",
    title: "Password terlalu panjang",
    description: "Password maksimal 50 karakter.",
  },
  passwordMismatch: {
    type: "error",
    id: "register-password-confirmation",
    title: "Password Tidak Sama!",
    description: "Pastikan konfirmasi kata sandi sesuai.",
  },
};

const registerRequiredToastMap: Record<RegisterRequiredToastKey, ToastConfig> =
  {
    nameRequired: {
      type: "error",
      id: "register-name-required",
      title: "Nama Tidak Boleh Kosong!",
      description: "Masukkan nama terlebih dahulu.",
    },
    addressRequired: {
      type: "error",
      id: "register-address-required",
      title: "Alamat Tidak Boleh Kosong!",
      description: "Masukkan alamat terlebih dahulu.",
    },
    emailRequired: {
      type: "error",
      id: "register-email-required",
      title: "Email Tidak Boleh Kosong!",
      description: "Masukkan email terlebih dahulu.",
    },
  };

const loginToastMap: Record<LoginToastKey, ToastConfig> = {
  loginEmailRequired: {
    type: "error",
    id: "login-email-required",
    title: "Email Tidak Boleh Kosong!",
    description: "Masukkan email terlebih dahulu.",
  },
  loginEmailInvalid: {
    type: "warning",
    id: "login-email-invalid",
    title: "Format email tidak valid",
    description: "Pastikan format email sudah benar.",
  },
  loginPasswordRequired: {
    type: "error",
    id: "login-password-required",
    title: "Password Tidak Boleh Kosong!",
    description: "Masukkan password terlebih dahulu.",
  },
};

function showToast(config: ToastConfig) {
  if (config.type === "warning") {
    toast.warning(config.title, {
      id: config.id,
      description: config.description,
    });
    return;
  }

  toast.error(config.title, {
    id: config.id,
    description: config.description,
  });
}

export function showPasswordToast(key: PasswordToastKey) {
  showToast(passwordToastMap[key]);
}

export function showRegisterRequiredToast(key: RegisterRequiredToastKey) {
  showToast(registerRequiredToastMap[key]);
}

export function showLoginToast(key: LoginToastKey) {
  showToast(loginToastMap[key]);
}
