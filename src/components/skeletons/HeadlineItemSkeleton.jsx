import { useState } from 'react';
import { Flex, Skeleton, Space } from 'antd';
const HeadlineItemSkeleton = () => {
    const [active, setActive] = useState(true);
    const [size, setSize] = useState('default');

    return (
        <Flex gap="middle" vertical>
            <Space>
                <Skeleton.Input
                    active={active}
                    size={size}
                    style={{
                        width: 200,
                    }} />
            </Space>
            <Space>
                <Skeleton.Node
                    active={active}
                    style={{
                        width: 200,
                    }}
                />
            </Space>
            <Space>
                <Skeleton.Button active={active} size={size} shape={'round'} />
            </Space>
        </Flex>
    );
};
export default HeadlineItemSkeleton;