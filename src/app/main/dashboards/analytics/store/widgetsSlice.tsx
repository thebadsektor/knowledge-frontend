import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { RootStateType } from 'app/store/types';
import ConversionsWidgetType from '../types/ConversionsWidgetType';
import GenderWidgetType from '../types/GenderWidgetType';
import ImpressionsWidgetType from '../types/ImpressionsWidgetType';
import LanguageWidgetType from '../types/LanguageWidgetType';
import NewVsReturningWidgetType from '../types/NewVsReturningWidgetType';
import VisitorsOverviewWidgetType from '../types/VisitorsOverviewWidgetType';
import VisitorsVsPageViewsType from '../types/VisitorsVsPageViewsType';
import VisitsWidgetType from '../types/VisitsWidgetType';
import AgeWidgetType from '../types/AgeWidgetType';

type AppRootStateType = RootStateType<widgetsSliceType>;

export type WidgetsType = {
	age?: AgeWidgetType;
	conversions?: ConversionsWidgetType;
	gender?: GenderWidgetType;
	impressions?: ImpressionsWidgetType;
	language?: LanguageWidgetType;
	newVsReturning?: NewVsReturningWidgetType;
	visitors?: VisitorsOverviewWidgetType;
	visitorsVsPageViews?: VisitorsVsPageViewsType;
	visits?: VisitsWidgetType;
};

/**
 * Get the widgets data.
 */
export const getWidgets = createAppAsyncThunk('analyticsDashboardApp/widgets/getWidgets', async () => {
	const response = await axios.get('/api/dashboards/analytics/widgets');

	const data = (await response.data) as WidgetsType;

	return data;
});

const initialState: WidgetsType = {};

/**
 * The analytics dashboard widgets slice.
 */
const widgetsSlice = createSlice({
	name: 'analyticsDashboardApp/widgets',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getWidgets.fulfilled, (state, action) => action.payload);
	}
});

export const selectWidgets = (state: AppRootStateType) => state.analyticsDashboardApp.widgets;

export type widgetsSliceType = typeof widgetsSlice;

export default widgetsSlice;
