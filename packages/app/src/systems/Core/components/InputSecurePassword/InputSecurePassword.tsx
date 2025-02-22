import type { ThemeUtilsCSS } from '@fuel-ui/css';
import { cssObj } from '@fuel-ui/css';
import type { InputPasswordProps } from '@fuel-ui/react';
import { InputPassword, PasswordStrength, Stack } from '@fuel-ui/react';
import { useState } from 'react';
import type { ControllerRenderProps, FieldValues } from 'react-hook-form';

export type InputSecurePasswordProps = {
  onChangeStrength?: (strength: string) => void;
  onChange?: (e: never) => void;
  onBlur?: () => void;
  placeholder?: string;
  ariaLabel?: string;
  field: ControllerRenderProps<FieldValues, string> & {
    id: string;
  };
  inputProps?: Partial<InputPasswordProps>;
  css?: ThemeUtilsCSS;
};

export function InputSecurePassword({
  inputProps,
  field,
  onChangeStrength,
  onChange,
  onBlur,
  placeholder = 'Type your password',
  ariaLabel = 'Your Password',
  css,
}: InputSecurePasswordProps) {
  const [passwordTooltipOpened, setPasswordTooltipOpened] = useState(false);

  return (
    <Stack css={{ ...styles.root, ...css }} gap={0}>
      <PasswordStrength
        password={field.value || ''}
        open={passwordTooltipOpened}
        minLength={8}
        onChangeStrength={onChangeStrength}
        sideOffset={1}
        align="end"
      >
        <InputPassword
          {...field}
          {...inputProps}
          onChange={onChange}
          onBlur={() => {
            setPasswordTooltipOpened(false);
            onBlur?.();
          }}
          onFocus={() => setPasswordTooltipOpened(true)}
          placeholder={placeholder}
          aria-label={ariaLabel}
        />
      </PasswordStrength>
    </Stack>
  );
}

const styles = {
  root: cssObj({
    '& [data-radix-popper-content-wrapper]': {
      zIndex: '1 !important',
    },
    '& .fuel_popover--arrow': {
      marginLeft: -140,
    },
  }),
};
