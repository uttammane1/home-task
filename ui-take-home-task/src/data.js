export const graphData = [
  {
    function: "/litellm/proxy/proxy_server.py:chat_completion",
    params: [
      {
        identifier: "request",
        type: "Request",
      },
      {
        identifier: "fastapi_response",
        type: "Response",
      },
    ],
    response_object: "",
    children: [
      {
        function: "/litellm/proxy/proxy_server.py:ProxyConfig.load_team_config",
        params: [
          {
            identifier: "self",
            type: null,
          },
          {
            identifier: "team_id",
            type: "str",
          },
        ],
        response_object: "",
        children: [
          {
            function: "/litellm/proxy/proxy_server.py:ProxyConfig.get_config",
            params: [
              {
                identifier: "self",
                type: null,
              },
            ],
            response_object: "dict",
            children: [
              {
                function: "/litellm/proxy/utils.py:update_spend",
                params: [
                  {
                    identifier: "prisma_client",
                    type: "PrismaClient",
                  },
                  {
                    identifier: "db_writer_client",
                    type: "Optional[HTTPHandler]",
                  },
                  {
                    identifier: "proxy_logging_obj",
                    type: "ProxyLogging",
                  },
                ],
                response_object: "",
                children: [
                  {
                    function: "/litellm/proxy/utils.py:print_verbose",
                    params: [
                      {
                        identifier: "print_statement",
                        type: null,
                      },
                    ],
                    response_object: "",
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            function: "/litellm/proxy/utils.py:_is_valid_team_configs",
            params: [],
            response_object: "",
            children: [],
          },
        ],
      },
      {
        function: "/litellm/proxy/proxy_server.py:parse_cache_control",
        params: [
          {
            identifier: "cache_control",
            type: null,
          },
        ],
        response_object: "",
        children: [],
      },
      {
        function: "/litellm/proxy/proxy_server.py:select_data_generator",
        params: [
          {
            identifier: "response",
            type: null,
          },
          {
            identifier: "user_api_key_dict",
            type: null,
          },
        ],
        response_object: "",
        children: [
          {
            function: "/litellm/proxy/proxy_server.py:async_data_generator",
            params: [
              {
                identifier: "response",
                type: null,
              },
              {
                identifier: "user_api_key_dict",
                type: null,
              },
            ],
            response_object: "",
            children: [
              {
                function:
                  "/litellm/proxy/utils.py:ProxyLogging.post_call_failure_hook",
                params: [
                  {
                    identifier: "self",
                    type: null,
                  },
                  {
                    identifier: "original_exception",
                    type: "Exception",
                  },
                  {
                    identifier: "user_api_key_dict",
                    type: "UserAPIKeyAuth",
                  },
                ],
                response_object: "",
                children: [
                  {
                    function:
                      "/litellm/proxy/utils.py:ProxyLogging.alerting_handler",
                    params: [
                      {
                        identifier: "self",
                        type: null,
                      },
                      {
                        identifier: "message",
                        type: "str",
                      },
                      {
                        identifier: "level",
                        type: 'Literal["Low", "Medium", "High"]',
                      },
                      {
                        identifier: "alert_type",
                        type: 'Literal[\n            "llm_exceptions",\n            "llm_too_slow",\n            "llm_requests_hanging",\n            "budget_alerts",\n            "db_exceptions",\n        ]',
                      },
                    ],
                    response_object: "",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        function: "/litellm/proxy/utils.py:ProxyLogging.during_call_hook",
        params: [
          {
            identifier: "self",
            type: null,
          },
          {
            identifier: "data",
            type: "dict",
          },
          {
            identifier: "user_api_key_dict",
            type: "UserAPIKeyAuth",
          },
          {
            identifier: "call_type",
            type: 'Literal[\n            "completion",\n            "embeddings",\n            "image_generation",\n            "moderation",\n            "audio_transcription",\n        ]',
          },
        ],
        response_object: "",
        children: [],
      },
      {
        function: "/litellm/proxy/utils.py:ProxyLogging.post_call_failure_hook",
        params: [
          {
            identifier: "self",
            type: null,
          },
          {
            identifier: "original_exception",
            type: "Exception",
          },
          {
            identifier: "user_api_key_dict",
            type: "UserAPIKeyAuth",
          },
        ],
        response_object: "",
        children: [
          {
            function: "/litellm/proxy/utils.py:ProxyLogging.alerting_handler",
            params: [
              {
                identifier: "self",
                type: null,
              },
              {
                identifier: "message",
                type: "str",
              },
              {
                identifier: "level",
                type: 'Literal["Low", "Medium", "High"]',
              },
              {
                identifier: "alert_type",
                type: 'Literal[\n            "llm_exceptions",\n            "llm_too_slow",\n            "llm_requests_hanging",\n            "budget_alerts",\n            "db_exceptions",\n        ]',
              },
            ],
            response_object: "",
            children: [],
          },
        ],
      },
      {
        function: "/litellm/proxy/utils.py:ProxyLogging.post_call_success_hook",
        params: [
          {
            identifier: "self",
            type: null,
          },
          {
            identifier: "response",
            type: "Union[ModelResponse, EmbeddingResponse, ImageResponse]",
          },
          {
            identifier: "user_api_key_dict",
            type: "UserAPIKeyAuth",
          },
        ],
        response_object: "",
        children: [],
      },
      {
        function: "/litellm/proxy/utils.py:ProxyLogging.pre_call_hook",
        params: [
          {
            identifier: "self",
            type: null,
          },
          {
            identifier: "user_api_key_dict",
            type: "UserAPIKeyAuth",
          },
          {
            identifier: "data",
            type: "dict",
          },
          {
            identifier: "call_type",
            type: 'Literal[\n            "completion",\n            "embeddings",\n            "image_generation",\n            "moderation",\n            "audio_transcription",\n        ]',
          },
        ],
        response_object: "",
        children: [
          {
            function: "/litellm/proxy/utils.py:print_verbose",
            params: [
              {
                identifier: "print_statement",
                type: null,
              },
            ],
            response_object: "",
            children: [],
          },
        ],
      },
      {
        function: "/litellm/proxy/utils.py:_is_valid_team_configs",
        params: [],
        response_object: "",
        children: [],
      },
      {
        function: "/litellm/proxy/utils.py:_read_request_body",
        params: [
          {
            identifier: "request",
            type: null,
          },
        ],
        response_object: "",
        children: [],
      },
    ],
  },
];

const initialNodes = [
  // Root Node (Left)
  {
    id: "1",
    position: { x: 100, y: 410 },
    data: {
      topHeading: "Root Process",
      subHeading: "System Initialization",
      items: ["Initialize Services", "Check Dependencies"],
      type: "parent",
    },
    type: "custom",
    draggable: true,
  },

  // First-Level Children (Center)
  {
    id: "2",
    position: { x: 400, y: 200 },
    data: {
      topHeading: "Auth Check",
      subHeading: "Verifies identity",
      items: ["Check Token", "Validate Session", "Log Activity"],
      type: "child",
    },
    type: "custom",
    draggable: true,
  },
  {
    id: "3",
    position: { x: 400, y: 620 },
    data: {
      topHeading: "Data Processing",
      subHeading: "Handles data",
      items: ["Fetch Data", "Process Request", "Store Logs"],
      type: "child",
    },
    type: "custom",
    draggable: true,
  },

  // Second-Level Children (Right)
  {
    id: "4",
    position: { x: 700, y: 20 },
    data: {
      topHeading: "Token Validation",
      subHeading: "Security Check",
      items: ["Decode Token", "Check Expiry", "Verify Signature"],
      type: "grandchild",
    },
    type: "custom",
    draggable: true,
  },
  {
    id: "5",
    position: { x: 700, y: 170 },
    data: {
      topHeading: "Session Management",
      subHeading: "Handles User Sessions",
      items: ["Create Session", "Renew Session", "Destroy Session"],
      type: "grandchild",
    },
    type: "custom",
    draggable: true,
  },
  {
    id: "6",
    position: { x: 700, y: 320 },
    data: {
      topHeading: "Logging Activity",
      subHeading: "Tracks User Actions",
      items: ["Store Logs", "Monitor Events", "Analyze Data"],
      type: "grandchild",
    },
    type: "custom",
    draggable: true,
  },
  {
    id: "7",
    position: { x: 700, y: 520 },
    data: {
      topHeading: "Data Retrieval",
      subHeading: "Fetching Information",
      items: ["Query Database", "Fetch API Data", "Handle Errors"],
      type: "grandchild",
    },
    type: "custom",
    draggable: true,
  },
  {
    id: "8",
    position: { x: 700, y: 670 },
    data: {
      topHeading: "Data Transformation",
      subHeading: "Processes Raw Data",
      items: ["Sanitize Input", "Apply Business Logic", "Prepare Output"],
      type: "grandchild",
    },
    type: "custom",
    draggable: true,
  },
  {
    id: "9",
    position: { x: 700, y: 820 },
    data: {
      topHeading: "Storage Management",
      subHeading: "Handles Data Persistence",
      items: ["Write to Database", "Update Indexes", "Optimize Queries"],
      type: "grandchild",
    },
    type: "custom",
    draggable: true,
  },
];

const initialEdges = [
  // Root -> First-Level (Center)
  { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
  { id: "e1-3", source: "1", target: "3", type: "smoothstep" },

  // First-Level (Center) -> Second-Level (Right)
  { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
  { id: "e2-5", source: "2", target: "5", type: "smoothstep" },
  { id: "e2-6", source: "2", target: "6", type: "smoothstep" },

  { id: "e3-7", source: "3", target: "7", type: "smoothstep" },
  { id: "e3-8", source: "3", target: "8", type: "smoothstep" },
  { id: "e3-9", source: "3", target: "9", type: "smoothstep" },
];

export { initialNodes, initialEdges };
