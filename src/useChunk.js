// @ts-check
import { useContext } from "react";
import useSWR from "swr";

import { api } from "./api";
import { EditmodeContext } from "./EditmodeContext";
import { renderChunk } from "./utils/renderChunk.jsx";
import { computeContentKey } from "./utils/computeContentKey";

export function useChunk(defaultContent, { identifier }) {
  const { projectId } = useContext(EditmodeContext);
  const contentKey = defaultContent ? computeContentKey(defaultContent) : null;

  const url = identifier
    ? `chunks/${identifier}`
    : `chunks/${contentKey}?project_id=${projectId}`;

  const { data: chunk, error } = useSWR(url, (url) =>
    api.get(url).then((res) => res.data)
  );

  if (error) {
    console.log(
      `Something went wrong trying to retrieve chunk data: ${error}. Have you provided the correct Editmode identifier as a prop to your Chunk component instance?`
    );

    return {
      Component(props) {
        return renderChunk(
          {
            chunk_type: "single_line_text",
            content: defaultContent,
            content_key: contentKey,
          },
          props
        );
      },
      content: defaultContent,
    };
  }

  if (!chunk) {
    return {
      Component() {
        return null;
      },
      content: defaultContent,
    };
  }

  // TODO What about other content types (e.g. collection, image, etc.?)
  // Possibilities are:
  // - <Chunk type={Editmode.IMAGE_CHUNK} />
  // - useChunk(defaultContent, { identifier: "123", type: Editmode.IMAGE_CHUNK })
  // - <ImageChunk>
  // - useChunkCollection / useChunkImage / useChunkCollection
  return {
    Component(props) {
      return renderChunk(chunk, props);
    },
    content: chunk.content,
  };
}
