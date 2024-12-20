import React from "react";

function Button({ title, className }: { title: string; className: string }) {
  return (
    <div>
      <button className={className}>{title}</button>
    </div>
  );
}

export default Button;
