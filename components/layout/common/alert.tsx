import { Alert as CnAlert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export interface CommonAlertProps {
  variant?: "default" | "destructive" | "success" | "warning" | "info";
  title?: string;
  description?: string;
}

export function Alert({ variant = "default", title, description }: CommonAlertProps) {
  const alertStyles = {
    default: "text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-400",
    destructive: "text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400",
    success: "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400",
    warning: "text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400",
    info: "text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
  };

  return (
    <CnAlert className={`p-4 mb-4 text-sm rounded-lg border-none ${alertStyles[variant]}`}>
      <div className="text-start">
        {/* {title && <AlertTitle className="font-medium">{title}</AlertTitle>} */}
        {description && <AlertDescription>{description}</AlertDescription>}
      </div>
    </CnAlert>
  );
}