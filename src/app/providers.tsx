import { ConfigProvider, theme } from "antd";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
    return (
        //   <ThemeProvider>
        //     <AuthProvider></AuthProvider>
        //   </ThemeProvider>

        <ConfigProvider
            theme={{

                //algorithm: theme.darkAlgorithm,
                token: {
                    // Seed Token
                    colorPrimary: 'rgb(57, 192, 233)',
                    //colorBorder: '#3f6777'
                    // Alias Token
                    // colorBgContainer: '#3f6777',
                },
            }}
        >
            {children}
        </ConfigProvider>


    );
}