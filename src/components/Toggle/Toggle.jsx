import { classNames } from "../../uitls/index";
import { Switch } from "@headlessui/react";
import { useState } from "react";

const Toggle = ({ value, onChange, disable, label }) => {
  const [enabled, setEnabled] = useState(value);

  const onChangeState = () => {
    setEnabled(!enabled);
    onChange && onChange(!enabled);
  };

  return (
    <div className="flex gap-4 items-center">
      {label ? <p className="flex font-medium text-sm">{label}</p> : null}
      <Switch
        checked={enabled}
        defaultChecked={enabled}
        onChange={onChangeState}
        className={classNames([
          enabled ? "bg-primaryColor" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primaryColor focus:ring-offset-2",
        ])}
      >
        <span
          aria-hidden="true"
          className={classNames([
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
          ])}
        />
      </Switch>
    </div>
  );
};

export default Toggle;
