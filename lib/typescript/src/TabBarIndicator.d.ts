import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import type { NavigationState, Route, SceneRendererProps } from './types';
export type GetTabWidth = (index: number) => number;
export type Props<T extends Route> = SceneRendererProps & {
    navigationState: NavigationState<T>;
    width: string | number;
    style?: StyleProp<ViewStyle>;
    getTabWidth: GetTabWidth;
    gap?: number;
    children?: React.ReactNode;
};
export declare function TabBarIndicator<T extends Route>({ getTabWidth, layout, navigationState, position, width, gap, style, children, }: Props<T>): JSX.Element;
//# sourceMappingURL=TabBarIndicator.d.ts.map