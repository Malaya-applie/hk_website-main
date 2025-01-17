import { Table } from "@tanstack/react-table";
import { ReactNode } from "react";
import { FieldErrors } from "react-hook-form";
import { UseFormRegister } from "react-hook-form";

//  Login Api Interface
export interface loginInterface {
  email: string;
  password: string;
}

export interface LoginFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  onSubmit: () => void;
}

// admin sidebar navigattion interface
export interface NavData {
  id: number;
  name: string;
  link: string;
  logo: ReactNode;
}

// dynamic table component interface
export type ColumnDataItem = {
  [key: string]: any;
  handleUpdate?: () => void;
  handleDelete?: () => void;
};

export interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

// dialog form interface
export interface DialogFormProps {
  isOpen: boolean;
  onClose: () => void;
  formComponent: React.ReactNode;
  title: string;
  description: string;
}

// Brandlogo logic interface
export interface CreateBrandLogo {
  name: string;
  logo?: string | FileList;
}

export interface UpdateBrandLogo extends CreateBrandLogo {
  id: number;
}

export interface BrandLogoState {
  brandLogos: Array<UpdateBrandLogo>;
}

export interface BrandLogoFormProps {
  onSubmit: (data: CreateBrandLogo) => void;
  defaultValues?: UpdateBrandLogo;
}

// label logic interface
export interface CreateLabel {
  label: string;
  description: string;
}

export interface UpdateLabel extends CreateLabel {
  id: number;
}

export interface LabelState {
  labels: UpdateLabel[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface LabelFormProps {
  onSubmit: (data: CreateLabel) => void;
  defaultValues?: UpdateLabel;
}

// client feedback interface
export interface CreateClientFeedbackInterface {
  name: string;
  position?: string;
  company?: string;
  feedback: string;
  userimage?: string | FileList;
}

export interface ClientFeedbackInterface {
  id: number;
  name: string;
  position?: string;
  company?: string;
  feedback: string;
  userimage?: string;
}

export interface ClientFeedbackState {
  clientFeedbacks: Array<ClientFeedbackInterface>;
}

// navbar interface
export interface CreateNavBar {
  name: string;
  link: string;
}

export interface UpdateNavBar extends CreateNavBar {
  id: number;
}

export interface NavbarState {
  navbars: UpdateNavBar[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface NavBarFormProps {
  onSubmit: (data: CreateNavBar) => void;
  defaultValues?: UpdateNavBar;
}

// newsletter interface
export interface CreateNewsletter {
  email: string;
  name: string;
  agreed: boolean;
}

export interface UpdateNewsletter extends CreateNewsletter {
  id: number;
}

// service interface
export interface CreateService {
  name: string;
  description: string;
  icon?: string | FileList;
}

export interface UpdateService extends CreateService {
  id: number;
}
export interface ServiceFormProps {
  onSubmit: (data: CreateService) => void;
  defaultValues?: UpdateService;
}

export interface ServiceState {
  services: Array<UpdateService>;
}

// inquiry interface
export interface CreateInquiry {
  email: string;
  name: string;
  service: string;
}

export interface UpdateInquiry extends CreateInquiry {
  id: number;
}

//portfolio interface
export interface CreateCaseStudyInterface {
  title: string;
  description: string;
  points?: string;
  button_text: string;
  button_link: string;
  image?: string | FileList;
}

export interface CaseStudyInterface {
  id: number;
  title: string;
  description: string;
  points?: string;
  button_text: string;
  button_link: string;
  image?: string;
}

export interface CaseStudyState {
  caseStudies: Array<CaseStudyInterface>;
}

//  portfolio interface
export interface CreatePortfolioInterface {
  title: string;
  heading: string;
  problem: string;
  solution: string;
  impact_1_title?: string;
  impact_1_stats?: string;
  impact_2_title?: string;
  impact_2_stats?: string;
  impact_3_title?: string;
  impact_3_stats?: string;
  impact_4_title?: string;
  impact_4_stats?: string;
  image?: string | FileList;
}

export interface PortfolioInterface {
  id: number;
  title: string;
  heading: string;
  problem: string;
  solution: string;
  impact_1_title?: string;
  impact_1_stats?: string;
  impact_2_title?: string;
  impact_2_stats?: string;
  impact_3_title?: string;
  impact_3_stats?: string;
  impact_4_title?: string;
  impact_4_stats?: string;
  image?: string;
}

export interface PortfolioState {
  portfolios: Array<PortfolioInterface>;
}

// SocialMedia logic interface
export interface CreateSocialMedia {
  name: string;
  link: string;
  logo?: string | FileList;
}

export interface UpdateSocialMedia extends CreateSocialMedia {
  id: number;
}

export interface SocialMediaState {
  socialMedias: Array<UpdateSocialMedia>;
}

export interface SocialMediaFormProps {
  onSubmit: (data: CreateSocialMedia) => void;
  defaultValues?: UpdateSocialMedia;
}

// category logic interface
export interface CreateCategory {
  name: string;
}

export interface UpdateCategory extends CreateCategory {
  id: number;
}

export interface CategoryState {
  categories: Array<UpdateCategory>;
}

export interface CategoryFormProps {
  onSubmit: (data: CreateCategory) => void;
  defaultValues?: UpdateCategory;
}

// blog interface
export interface CreateBlogInterface {
  title: string;
  categoryId?: string;
  category?: string;
  introduction: string;
  description: string;
  author: string;
  image: string | FileList | undefined;
}

export interface UpdateBlog extends CreateBlogInterface {
  id: number;
}
export interface BlogFormProps {
  onSubmit: (data: CreateBlogInterface) => void;
  defaultValues?: UpdateBlog;
}

export interface BlogState {
  blogs: Array<UpdateBlog>;
}
