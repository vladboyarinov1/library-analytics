import { TreeMap } from '@/common/data'
import { createAppAsyncThunk } from '@/common/utils/create-app-async-thunk'
import { paramsToQueryString } from '@/common/utils/params-to-query-string'
import { appActions } from '@/components/ui/features/common-actions'
import { editionsPubKeyAnalysisApi } from '@/components/ui/pages/editions-pub-key-analysis-api/api/editions-pub-key-analysis-api'
import { createSlice } from '@reduxjs/toolkit'

const { setLinearProgress } = appActions

export const slice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        const newPublicationsData = action.payload.data.slice(0, 7).map((item: any) => ({
          id: item['display_name'],
          value: item['works_count'],
        }))
        const newCitationsData = action.payload.data.slice(0, 7).map((item: any) => ({
          id: item['display_name'],
          value: item['cited_by_count'],
        }))

        return {
          ...state,
          citationsData: newCitationsData,
          publicationsData: newPublicationsData,
        }
      })
      .addCase(fetchPieChartData.fulfilled, (state, action) => {
        const newPieChartData = action.payload.data
          .map((item: any) => ({
            id: item['key_display_name'],
            value: item.count,
          }))
          .filter(
            (item: any) => item.id !== 'unknown' && item.value !== 'unknown' && item.value !== 0
          )

        return {
          ...state,
          pieChartData: newPieChartData,
        }
      })
      .addCase(fetchBarChartData.fulfilled, (state, action) => {
        const newBarChartData = action.payload.data
          .slice(0, 9)
          .map((item: any) => ({
            id: item['display_name'],
            value: item['works_count'],
          }))
          .filter(
            (item: any) => item.id !== 'unknown' && item.value !== 'unknown' && item.value !== 0
          )

        return {
          ...state,
          barChartData: newBarChartData,
        }
      })
      .addCase(fetchTreeMapData.fulfilled, (state, action) => {
        const formattedData: TreeMap = {
          children: action.payload.data.map((request: any) => {
            const filteredChildren = request.data
              .filter((item: any) => item.key_display_name !== 'unknown' && item.count !== 0)
              .map((item: any) => ({
                name: item.key_display_name,
                score: item.count,
              }))

            return {
              children: filteredChildren,
              name: request.id,
            }
          }),
        }

        state.treeMapData = formattedData
      })
      .addCase(fetchOpenAccessData.fulfilled, (state, action) => {
        const newData = action.payload.data
          .slice(0, 9)
          .map((item: any) => ({
            id: item['key_display_name'],
            value: item['count'],
          }))
          .filter(
            (item: any) => item.id !== 'unknown' && item.value !== 'unknown' && item.value !== 0
          )

        return {
          ...state,
          openAcceessData: {
            data: newData,
            exportData: action.payload.data,
          },
        }
      })

      .addCase(fetchBarChartCountryData.fulfilled, (state, action) => {
        const newBarChartCountryData = action.payload.data
          .slice(0, 9)
          .map((item: any) => ({
            id: item['key_display_name'],
            value: item['count'],
          }))
          .filter((item: any) => item['id'] !== 'unknown' && item['value'] !== 0)

        return {
          ...state,
          barChartCountryData: {
            data: newBarChartCountryData,
            exportData: action.payload.data,
            resultCount: action.payload.data.length,
          },
        }
      })
  },
  initialState: {
    barChartCountryData: {
      data: [],
      exportData: [],
      resultCount: null,
    },
    barChartData: [],
    citationsData: [],
    openAcceessData: {
      data: [],
      exportData: [],
    },
    pieChartData: [],
    publicationsData: [],
    treeMapData: {},
  },
  name: 'pubKeyAnalysis',
  reducers: {},
})

const fetchData = createAppAsyncThunk(
  `${slice.name}/fetchData`,
  async (param: any, { dispatch, rejectWithValue }) => {
    const transformedParams = paramsToQueryString(param)

    dispatch(setLinearProgress({ value: true }))
    try {
      const res = await editionsPubKeyAnalysisApi.getData(transformedParams.queryString)

      dispatch(setLinearProgress({ value: false }))
      if (res.data.meta.count > 0) {
        return { data: res.data.results }
      } else {
        return rejectWithValue({ errors: 'Нет данных для отображения' })
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
)

const fetchBarChartData = createAppAsyncThunk(
  `${slice.name}/fetchBarChartData`,
  async (param: any, { rejectWithValue }) => {
    const transformedParams = paramsToQueryString(param)

    debugger
    try {
      const res = await editionsPubKeyAnalysisApi.getBarChartData(transformedParams.queryString)

      if (res.data.meta.count > 0) {
        return { data: res.data.results }
      } else {
        return rejectWithValue({ errors: 'Нет данных для отображения' })
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
)
const fetchOpenAccessData = createAppAsyncThunk(
  `${slice.name}/fetchOpenAccessData`,
  async (param: any, { rejectWithValue }) => {
    const transformedParams = paramsToQueryString(param)

    try {
      const res = await editionsPubKeyAnalysisApi.getOpenAccessData(transformedParams.queryString)

      if (res.data.meta.count > 0) {
        return { data: res.data['group_by'] }
      } else {
        return rejectWithValue({ errors: 'Нет данных для отображения' })
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
)
const fetchPieChartData = createAppAsyncThunk(
  `${slice.name}/fetchPieChartData`,
  async (param: any, { rejectWithValue }) => {
    const transformedParams = paramsToQueryString(param)

    try {
      const res = await editionsPubKeyAnalysisApi.getPieChartData(transformedParams.queryString)

      if (res.data.meta.count > 0) {
        return { data: res.data['group_by'] }
      } else {
        return rejectWithValue({ errors: 'Нет данных для отображения' })
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
)
const fetchTreeMapData = createAppAsyncThunk(
  `${slice.name}/fetchTreeMapData`,
  async (param: any, { rejectWithValue }) => {
    try {
      const { ids, types } = param
      const requests = ids.map((id: string, index: number) =>
        editionsPubKeyAnalysisApi.getTreeMapData(id, types[index])
      )
      const responses = await Promise.all(requests)

      const data = responses.map((res, index) => ({
        data: res.data['group_by'],
        id: ids[index],
      }))

      if (responses[0].data.meta.count > 0 || responses[1].data.meta.count > 0) {
        return { data }
      } else {
        return rejectWithValue({ errors: 'Нет данных для отображения' })
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
)
const fetchBarChartCountryData = createAppAsyncThunk(
  `${slice.name}/fetchBarChartCountryData`,
  async (param: any, { rejectWithValue }) => {
    const transformedParams = paramsToQueryString(param)

    try {
      const res = await editionsPubKeyAnalysisApi.getBarChartCountryData(
        transformedParams.queryString
      )

      if (res.data.meta.count > 0) {
        return { data: res.data['group_by'] }
      } else {
        return rejectWithValue({ errors: 'Нет данных для отображения' })
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
)

export const asyncActions = {
  fetchBarChartCountryData,
  fetchBarChartData,
  fetchData,
  fetchOpenAccessData,
  fetchPieChartData,
  fetchTreeMapData,
}
