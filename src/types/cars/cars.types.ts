import React from "react";
import {FormErrorType} from "../application/application.types";

export type CarsSectionStateType = {
  filtersSidebarIsVisible: boolean,
  pageIsLoading: boolean,
  activeContentPage: number,
  filters: CarsSidebarStateType,
  content: CarType[],
  filteredContent: CarType[],
  contentOnPage: CarType[],
  activePage: number
}

export type CarsSidebarStateType = {
  availableNow: boolean,
  pricePerDay: {
    min: number,
    max: number,
    value: number[]
  },
  manufacturers: CarsSidebarManufacturerType[],
  categories: CarsSidebarCategoryType[],
  orderBy: string,
  searchQuery: string
}

export type CarsSidebarPropsType = {
  filtersState: [CarsSectionStateType, React.Dispatch<CarsSectionStateType>]
}

export type CarsFiltersPropsType = {
  carsContainerState: [CarsSectionStateType, React.Dispatch<CarsSectionStateType>]
}

export type CarsPagePropsType = {
  category: string
}

export type CarsSidebarCategoryType = {
  name: string,
  value?: string,
  checked: boolean
}

export type CarsSidebarManufacturerType = {
  name: string,
  value?: string,
  checked: boolean
}

export type CarType = {
  id: number | string,
  image: string,
  title: string,
  pricePerDay: number,
  category: string,
  manufacturer: string,
  mileage: number,
  seats: number,
  transmission: string,
  addedAt: Date,
  reservations: CarReservationType[]
  feedbacks: CarFeedbackType[]
}

export type CarCategoryType = {
  name: string,
  value: string
}

export type CarManufacturerType = {
  name: string,
  value: string
}

export type CarCardPropsType = {
  data: CarType
}

export type CarReservationType = {
  bookerName: string,
  bookerPhone: string,
  from: Date,
  to: Date,
  additionalWishes?: string
}

export type CarDetailsStateType = {
  data: CarType
}

export type GiveCarFeedbackFormPropsType = {
  car?: CarType
}

export type GiveCarFeedbackFormStateType = {
  data: CarFeedbackType,
  errors: FormErrorType[]
}

export type ReserveCarFormPropsType = {
  car?: CarType
}

export type ReserveCarFormStateType = {
  data: CarReservationType,
  errors: FormErrorType[]
}

export type CarFeedbackType = {
  name: string,
  feedback: string
}