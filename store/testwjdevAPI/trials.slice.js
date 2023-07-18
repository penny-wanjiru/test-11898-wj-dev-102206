import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_trial_list = createAsyncThunk(
  "trials/api_v1_trial_list",
  async payload => {
    const response = await apiService.api_v1_trial_list(payload)
    return response.data
  }
)
export const api_v1_trial_create = createAsyncThunk(
  "trials/api_v1_trial_create",
  async payload => {
    const response = await apiService.api_v1_trial_create(payload)
    return response.data
  }
)
export const api_v1_trial_retrieve = createAsyncThunk(
  "trials/api_v1_trial_retrieve",
  async payload => {
    const response = await apiService.api_v1_trial_retrieve(payload)
    return response.data
  }
)
export const api_v1_trial_update = createAsyncThunk(
  "trials/api_v1_trial_update",
  async payload => {
    const response = await apiService.api_v1_trial_update(payload)
    return response.data
  }
)
export const api_v1_trial_partial_update = createAsyncThunk(
  "trials/api_v1_trial_partial_update",
  async payload => {
    const response = await apiService.api_v1_trial_partial_update(payload)
    return response.data
  }
)
export const api_v1_trial_destroy = createAsyncThunk(
  "trials/api_v1_trial_destroy",
  async payload => {
    const response = await apiService.api_v1_trial_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const trialsSlice = createSlice({
  name: "trials",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_trial_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_trial_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_trial_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_trial_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_trial_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_trial_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_trial_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_trial_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_trial_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_trial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_trial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_trial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_trial_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_trial_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_trial_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_trial_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_trial_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_trial_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_trial_list,
  api_v1_trial_create,
  api_v1_trial_retrieve,
  api_v1_trial_update,
  api_v1_trial_partial_update,
  api_v1_trial_destroy,
  slice: trialsSlice
}
