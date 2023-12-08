import { LaunchType } from "./launch.type";

export interface LaunchesDTO {
  docs: LaunchType[];
  totalDocs: number;
  offset?: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage?: number;
  nextPage: number;
}
