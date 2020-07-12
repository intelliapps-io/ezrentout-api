export interface Group {
  id: number
  company_id: number
  name: string
  description: string
  created_at: string
  updated_at: string
  assets_count: number
  documents_count: number
  delta: boolean
  depreciation_rate: string
  pricing_bracket_interval: any
  enable_service_triage: boolean
  triage_completion_period: number
  visible_on_web_store: boolean
  triage_completion_period_basis: string
  indefinite_triage_completion_period: boolean
  hidden_on_web_store: boolean
  allow_staff_to_set_checkout_duration: boolean
  staff_checkout_duration_months: number
  staff_checkout_duration_weeks: number
  staff_checkout_duration_days: number
  staff_checkout_duration_hours: number
  staff_checkout_duration_mins: number
}

export interface SubGroup {
  id: number
  name: string
  description: string
  group_id: number
  assets_count: number
  created_at: string
  updated_at: string
  visible_on_web_store: boolean
  enable_service_triage: boolean
  triage_completion_period: number
  triage_completion_period_basis: string
  indefinite_triage_completion_period: boolean
  triage_same_as_group: boolean
  parent_id: number
  lft: number
  rgt: number
  hidden_on_web_store: boolean
  allow_staff_to_set_checkout_duration: boolean
  staff_checkout_duration_months: number
  staff_checkout_duration_weeks: number
  staff_checkout_duration_days: number
  staff_checkout_duration_hours: number
  staff_checkout_duration_mins: number
}