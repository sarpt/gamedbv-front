import React from 'react';
import Typography from "@material-ui/core/Typography";

interface StyledComponent {
  className?: string;
}

export const TextBodyBig: React.FC<StyledComponent> = ({ className, children }) => (<Typography className={ className } variant="body1">{ children }</Typography>);
export const TextBodySmall: React.FC<StyledComponent> = ({ className, children }) => (<Typography className={ className } variant="body2">{ children }</Typography>);
export const TextHeaderBig: React.FC<StyledComponent> = ({ className, children }) => (<Typography className={ className } variant="h5">{ children }</Typography>);
export const TextHeaderSmall: React.FC<StyledComponent> = ({ className, children }) => (<Typography className={ className } variant="h6">{ children }</Typography>);
