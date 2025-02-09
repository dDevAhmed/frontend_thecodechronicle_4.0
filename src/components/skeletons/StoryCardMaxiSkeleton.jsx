import { useState } from "react";
import { Flex, Skeleton, Space } from "antd";

const StoryCardMaxiSkeleton = () => {
    const [active] = useState(true);
    const [size] = useState("default");
    // const [block] = useState(true);

    return (
        <Flex gap="middle" vertical style={{ width: "100%" }}>
            <Space style={{ width: "100%" }}>
                <Skeleton.Button active={active} size={size} shape="round" block />
            </Space>
            <Space style={{ width: "100%" }} direction="vertical">
                <Skeleton.Button active={active} size={size} shape="default" block />
            </Space>
            <Space style={{ width: "100%" }} direction="vertical">
                <Skeleton.Button active={active} size={size} shape="default" block style={{ height: 150 }} />
            </Space>
            <Space style={{ width: "100%" }} direction="">
                <Skeleton.Button active={active} size={size} shape="round" block />
                <Skeleton.Button active={active} size={size} shape="round" block />
                <Skeleton.Button active={active} size={size} shape="round" block />
            </Space>
        </Flex>
    );
};

export default StoryCardMaxiSkeleton;
