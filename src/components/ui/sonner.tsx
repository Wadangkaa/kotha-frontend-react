import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={ theme as ToasterProps["theme"] }
      className="tw-toaster tw-group"
      toastOptions={ {
        classNames: {
          toast:
            "tw-group tw-toast tw-group-[.tw-toaster]:bg-background tw-group-[.tw-toaster]:text-foreground tw-group-[.tw-toaster]:border-border tw-group-[.tw-toaster]:shadow-lg",
          description: "tw-group-[.tw-toast]:text-muted-foreground",
          actionButton:
            "tw-group-[.tw-toast]:bg-primary tw-group-[.tw-toast]:text-primary-foreground",
          cancelButton:
            "tw-group-[.tw-toast]:bg-muted tw-group-[.tw-toast]:text-muted-foreground",
        },
      } }
      { ...props }
    />
  );
};

export { Toaster };
