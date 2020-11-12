import React, { FC } from 'react';

const Title: FC<{ title: string }> = ({
    children,
    title,
}) => <div title={title}>{children}</div>;

export default Title;