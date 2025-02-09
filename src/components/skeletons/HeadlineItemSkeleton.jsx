import { useState } from 'react';
import { Flex, Skeleton, Space } from 'antd';
const HeadlineItemSkeleton = () => {
    const [active, setActive] = useState(true);
    const [size, setSize] = useState('default');

    return (
        <Flex gap="middle" vertical style={{ width: "100%" }}>
            <Space style={{ width: "100%" }} direction="vertical">
                <Skeleton.Button active={active} size={size} shape="default" block />
            </Space>
            <Space style={{ width: "100%" }} direction="vertical">
                <Skeleton.Button active={active} size={size} shape="default" block style={{ height: 100 }} />
            </Space>
            <Space>
                <Skeleton.Button active={active} size={size} shape={'round'} />
            </Space>
        </Flex>
    );
};
export default HeadlineItemSkeleton;