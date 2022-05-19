import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";
export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        { params: { text: term } }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES,
        payload: names,
      });
    } catch (error) {
      let errorMessage = "Failed to fetch NPM Package";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch({
        type: ActionType.SEARCH_REPO_ERROR,
        payload: errorMessage,
      });
    }
  };
};
