import { AutoCenter, DotLoading } from "antd-mobile";
import React, { LazyExoticComponent } from "react";

export default (Comp: LazyExoticComponent<() => JSX.Element>) => {
    return (
        <React.Suspense
            fallback={
                <div className="lazy-loading">
                    <AutoCenter>
                        <DotLoading color="primary" />
                    </AutoCenter>
                </div>
            }
        >
            <Comp />
        </React.Suspense>
    );
};
