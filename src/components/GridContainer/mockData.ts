import { NetworkRequest } from "../../types";

export const mockRequests: NetworkRequest[] = [
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/sys/services/broadcaster/connect",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/sys/services/broadcaster/connect",
        },
        {
          name: "content-length",
          value: "201",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 201,
      postData: {
        mimeType: "application/json",
        text: '{"jwt":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZXNrcHJvIiwic3ViIjoiMSIsInVzZXJJbmZvIjp7Im5hbWUiOiJKb2huIERvZSJ9LCJleHAiOjE2MjQ2MTA3ODEuNjc4MjQyfQ.mFFdMlqvfisT1P6MoC-gnL3ZegALNCQvXEBQDyzGhIY"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:22 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 263,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 615,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:21.820Z",
    time: 515.4889998957515,
    timings: {
      blocked: 0.9980000043213367,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.158,
      wait: 512.4280000541509,
      receive: 1.9049998372793198,
      _blocked_queueing: 0.7650000043213367,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "4670",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 4670,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"loadClientInfo","variables":{},"query":"query loadClientInfo {\\n  ticketClientInfo {\\n    ...ticketClientInfoFragment\\n    __typename\\n  }\\n  preload_agents: users(filter: {isAgent: true}, perPage: 100) {\\n    users {\\n      ...AgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  preload_brands: brands {\\n    ...BrandInfoProps\\n    __typename\\n  }\\n  preload_agentTeams: agentTeams {\\n    ...AgentTeamInfoProps\\n    __typename\\n  }\\n  preload_languages: languages {\\n    ...LangInfoProps\\n    __typename\\n  }\\n  preload_ticketDepartments: ticketDepartments {\\n    ...DepInfoProps\\n    __typename\\n  }\\n  preloadTicketStatuses: ticketStatuses {\\n    ...TicketStatusInfoProps\\n    __typename\\n  }\\n  preload_ticketWorkflows: ticketWorkflows {\\n    ...TicketWorkflowProps\\n    __typename\\n  }\\n  preload_ticketPriorities: ticketPriorities {\\n    ...TicketPriorityProps\\n    __typename\\n  }\\n  preload_ticketCategories: ticketCategories {\\n    ...TicketCategoryProps\\n    __typename\\n  }\\n  preload_ticketProducts: ticketProducts {\\n    ...TicketProductProps\\n    __typename\\n  }\\n  preload_userGroups: userGroups {\\n    ...UserGroupInfoProps\\n    __typename\\n  }\\n  preload_myStars: myStars {\\n    id\\n    color {\\n      name\\n      __typename\\n    }\\n    title\\n    __typename\\n  }\\n}\\n\\nfragment ticketClientInfoFragment on TicketClientInfo {\\n  ticketAppEnabled: enabled\\n  refEnabled\\n  problemIncidentsAppEnabled\\n  tasksAppEnabled\\n  lockSettings {\\n    lockTicketOnOpenTab\\n    unlockTicketOnCloseTab\\n    __typename\\n  }\\n  billingSettings {\\n    currencyEnabled\\n    currencyName\\n    timeEnabled\\n    autostartTimer\\n    timerOnReply\\n    __typename\\n  }\\n  forwardSettings {\\n    allowOwnEmailAddress\\n    __typename\\n  }\\n  replySettings {\\n    setStatusOnReply\\n    setAgentOnReplyWhenAssigned\\n    setAgentOnReplyWhenUnassigned\\n    setTeamOnReplyWhenTeamAssigned\\n    setTeamOnReplyWhenTeamUnassigned\\n    autoCheckCloseTabOnReplyCheckbox\\n    __typename\\n  }\\n  emailAttachSettings {\\n    agent {\\n      maxFileSize\\n      extensions\\n      __typename\\n    }\\n    __typename\\n  }\\n  filterSettings {\\n    orderableFields {\\n      ...TicketFieldFragment\\n      __typename\\n    }\\n    groupableFields {\\n      ...TicketFieldFragment\\n      __typename\\n    }\\n    viewableFields {\\n      ...TicketFieldFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  refEnabled\\n  __typename\\n}\\n\\nfragment AgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment BrandInfoProps on Brand {\\n  id\\n  name\\n  iconUrl\\n  __typename\\n}\\n\\nfragment AgentTeamInfoProps on AgentTeam {\\n  id\\n  name\\n  avatarUrn\\n  __typename\\n}\\n\\nfragment LangInfoProps on Language {\\n  id\\n  flagUrn\\n  title\\n  locale\\n  __typename\\n}\\n\\nfragment DepInfoProps on TicketDepartment {\\n  id\\n  title\\n  avatarUrn\\n  parent {\\n    id\\n    title\\n    avatarUrn\\n    __typename\\n  }\\n  children {\\n    id\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TicketStatusInfoProps on TicketStatus {\\n  id\\n  status_type\\n  title\\n  effective_display_order\\n  parent {\\n    id\\n    title\\n    status_type\\n    __typename\\n  }\\n  children {\\n    id\\n    status_type\\n    title\\n    effective_display_order\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TicketWorkflowProps on TicketWorkflow {\\n  id\\n  title\\n  display_order\\n  __typename\\n}\\n\\nfragment TicketPriorityProps on TicketPriority {\\n  id\\n  priority\\n  title\\n  __typename\\n}\\n\\nfragment TicketCategoryProps on TicketCategory {\\n  id\\n  title\\n  effective_display_order\\n  parent {\\n    id\\n    __typename\\n  }\\n  children {\\n    id\\n    title\\n    effective_display_order\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TicketProductProps on TicketProduct {\\n  id\\n  title\\n  effective_display_order\\n  parent {\\n    id\\n    __typename\\n  }\\n  children {\\n    id\\n    title\\n    effective_display_order\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment UserGroupInfoProps on UserGroup {\\n  id\\n  title\\n  is_enabled\\n  __typename\\n}\\n\\nfragment TicketFieldFragment on TicketField {\\n  ...customFieldDefWrapperFragment\\n  ... on TicketFieldStaticType {\\n    type\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment customFieldDefWrapperFragment on CustomField {\\n  def {\\n    ...CustomFieldDefFragment\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CustomFieldDefFragment on CustomFieldDef {\\n  id\\n  title\\n  aliases\\n  description\\n  is_enabled\\n  display_order\\n  is_user_enabled\\n  is_agent_field\\n  defer_agent_validation\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:22 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":57,"time":34.81},"other":{"count":1,"time":5.68},"total":{"count":58,"time":40.49}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 24789,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 4072,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:21.845Z",
    time: 851.0590000078082,
    timings: {
      blocked: 1.0229999999254942,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.258,
      wait: 848.0070000267923,
      receive: 1.7709999810904264,
      _blocked_queueing: 0.7949999999254942,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "memory",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/54AAAAAAAAAAAAAAA0/150-10.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "date",
          value: "Mon, 21 Jun 2021 17:41:58 GMT",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "etag",
          value: 'W/"72afce87d40b95a628a84af9df0582b5"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="150-10.jpg"',
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="150-10.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "content-length",
          value: "6005",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 6005,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.791Z",
    time: 0.08199992589652538,
    timings: {
      blocked: -1,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.0700000673532486,
      receive: 0.011999858543276787,
      _blocked_queueing: -1,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "161",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 161,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"voiceAccounts","variables":{},"query":"query voiceAccounts {\\n  voiceAccounts {\\n    id\\n    account_name\\n    type\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":6,"time":12.44},"total":{"count":6,"time":12.44}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 115,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 610,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.729Z",
    time: 516.3699998520315,
    timings: {
      blocked: 1.0989999955296517,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.182,
      wait: 514.5390000923127,
      receive: 0.5499997641891241,
      _blocked_queueing: 0.8249999955296516,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "167",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 167,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"bcVoiceQueueChannel","variables":{},"query":"query bcVoiceQueueChannel {\\n  bcVoiceQueueChannel {\\n    channel\\n    token\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":8,"time":14.09},"total":{"count":8,"time":14.09}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 290,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 759,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.730Z",
    time: 515.7049999106675,
    timings: {
      blocked: 1.1320000204145908,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.18300000000000002,
      wait: 513.9619998908788,
      receive: 0.42799999937415123,
      _blocked_queueing: 0.9200000204145908,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "284",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 284,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getOnlineStatus","variables":{},"query":"query getOnlineStatus {\\n  myOnlineStatus {\\n    __typename\\n    isOnlineChat\\n    availableStatus\\n    isOnlineVoice\\n    canUseForwarding\\n    forwardingNumber\\n    forwardingLoggedOut\\n    forwardingRingTimeout\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":7,"time":30.94},"total":{"count":7,"time":30.94}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 228,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 663,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.857Z",
    time: 568.3989999815822,
    timings: {
      blocked: 1.1409999855607749,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.20600000000000002,
      wait: 563.4890001067669,
      receive: 3.56299988925457,
      _blocked_queueing: 0.9459999855607748,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "150",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 150,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getMyTicketFilters","variables":{},"query":"query getMyTicketFilters {\\n  myFilters {\\n    id\\n    title\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":10,"time":30.45},"total":{"count":10,"time":30.45}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 487,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 678,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.845Z",
    time: 580.6199999060482,
    timings: {
      blocked: 0.9539999173432588,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.226,
      wait: 575.9570000101179,
      receive: 3.4829999785870314,
      _blocked_queueing: 0.7229999173432589,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "364",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 364,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"CommunityForums","variables":{},"query":"query CommunityForums($brandIds: [ID!]) {\\n  communityForums(filter: {brandIds: $brandIds}) {\\n    id\\n    title\\n    iconUrn\\n    parent {\\n      id\\n      title\\n      __typename\\n    }\\n    brand {\\n      id\\n      name\\n      iconUrl\\n      logoUrl\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":16,"time":26.59},"total":{"count":16,"time":26.59}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 2179,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 949,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.848Z",
    time: 577.3549999576062,
    timings: {
      blocked: 1.1759999507069587,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.13700000000000004,
      wait: 572.6339999009073,
      receive: 3.4080001059919596,
      _blocked_queueing: 0.9719999507069588,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "152",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 152,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTotalNewCount","variables":{},"query":"query getTotalNewCount {\\n  myNotifications {\\n    totalNewCount\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":8,"time":35.13},"total":{"count":8,"time":35.13}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 84,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 594,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.856Z",
    time: 569.5460001006722,
    timings: {
      blocked: 1.3560000886321069,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.143,
      wait: 564.7279998852462,
      receive: 3.3190001267939806,
      _blocked_queueing: 1.1430000886321068,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/sys/services/broadcaster/93c1e911-9953-41de-af13-2dde59c008e9/join?a=vSDqkI3RQYkDErzK8v7HK5AwguhFrg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value:
            "/sys/services/broadcaster/93c1e911-9953-41de-af13-2dde59c008e9/join?a=vSDqkI3RQYkDErzK8v7HK5AwguhFrg",
        },
        {
          name: "content-length",
          value: "402",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [
        {
          name: "a",
          value: "vSDqkI3RQYkDErzK8v7HK5AwguhFrg",
        },
      ],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 402,
      postData: {
        mimeType: "application/json",
        text: '{"channels":["eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZXNrcHJvIiwic3ViIjoiMSIsImNoYW5uZWxJZCI6ImFnZW50LW5vdGlmeS1mb3I6MSIsImV4cCI6MTYyNDYxMDc4MS42NzgzNTl9.kD9SUUL0GFfYx9WyUebzdWZg9Qbk2QdbXn3Rj4Z4Z4k","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZXNrcHJvIiwic3ViIjoiMSIsImNoYW5uZWxJZCI6ImFnZW50LWludGVyZmFjZSIsImV4cCI6MTYyNDYxMDc4MS43MDkyNjJ9.kjFF7PZHwn9PI8B56vA3ITGLCQhtHPeQYHa-VHUy-Kw"]}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 61,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 481,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.995Z",
    time: 430.041000014171,
    timings: {
      blocked: 1.268000080153346,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.181,
      wait: 424.79000008754434,
      receive: 3.801999846473336,
      _blocked_queueing: 0.9890000801533461,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "173",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 173,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"orgAppTabInfo","variables":{},"query":"query orgAppTabInfo($orgId: ID!) {\\n  org(id: $orgId) {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":5,"time":26.52},"total":{"count":5,"time":26.52}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 163,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 658,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.856Z",
    time: 570.3159999102354,
    timings: {
      blocked: 1.06199996624887,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.195,
      wait: 565.8179999454618,
      receive: 3.240999998524785,
      _blocked_queueing: 0.7599999662488699,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "232",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 232,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getOnlineAgents","variables":{},"query":"query getOnlineAgents {\\n  users(filter: {isOnline: true}) {\\n    users {\\n      id\\n      display_name\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":28.49},"total":{"count":11,"time":28.49}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 1471,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 729,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.858Z",
    time: 568.4670000337064,
    timings: {
      blocked: 1.11000004003942,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.13699999999999998,
      wait: 564.0599999134242,
      receive: 3.160000080242753,
      _blocked_queueing: 0.8920000400394201,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "420",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 420,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"GetSavedSearchesByType","variables":{"searchType":"ticket"},"query":"query GetSavedSearchesByType($searchType: SearchType!) {\\n  savedSearches: getSavedSearches(searchType: $searchType) {\\n    ...SavedSearchFragment\\n    __typename\\n  }\\n}\\n\\nfragment SavedSearchFragment on SavedSearch {\\n  id\\n  title\\n  criteria {\\n    fqlString\\n    __typename\\n  }\\n  is_enabled\\n  permission\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":6,"time":17.86},"total":{"count":6,"time":17.86}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 718,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 755,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.846Z",
    time: 579.5569999609143,
    timings: {
      blocked: 0.9369999794363976,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.191,
      wait: 574.7690000521094,
      receive: 3.659999929368496,
      _blocked_queueing: 0.6699999794363976,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "349",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 349,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getStarInfo","variables":{},"query":"query getStarInfo($id: [ID!]) {\\n  myStars(ids: $id) {\\n    id\\n    title\\n    color {\\n      __typename\\n      name\\n    }\\n    counts {\\n      count\\n      __typename\\n    }\\n    userPref {\\n      title\\n      displayOrder\\n      isEnabled\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":10,"time":24.1},"total":{"count":10,"time":24.1}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 1849,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 901,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.847Z",
    time: 579.1720000561327,
    timings: {
      blocked: 1.0740001325905324,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.17300000000000001,
      wait: 574.862000116244,
      receive: 3.0629998072981834,
      _blocked_queueing: 0.8430001325905323,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "216",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 216,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"onlineVoiceAndMessengerStatus","variables":{},"query":"query onlineVoiceAndMessengerStatus {\\n  myOnlineStatus {\\n    isOnlineChat\\n    availableStatus\\n    isOnlineVoice\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":7,"time":25.16},"total":{"count":7,"time":25.16}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 123,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 609,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.858Z",
    time: 568.1710001081228,
    timings: {
      blocked: 1.0320001325905324,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.14300000000000002,
      wait: 564.0239999298304,
      receive: 2.9720000457018614,
      _blocked_queueing: 0.8430001325905323,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1197",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1197,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"GetAllDismissedNotifications","variables":{},"query":"query GetAllDismissedNotifications($after: String) {\\n  myNotifications(first: 100, filter: {isDismissed: true}, after: $after) {\\n    totalDismissedCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    edges {\\n      ...notificationEdgeFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment notificationResponseFragment on TicketNotification {\\n  id\\n  personId\\n  isDismissed\\n  dateCreated\\n  title\\n  body\\n  ticket {\\n    id\\n    subject\\n    urgency\\n    date_last_agent_reply\\n    date_last_user_reply\\n    status {\\n      id\\n      status_type\\n      title\\n      __typename\\n    }\\n    person {\\n      id\\n      avatarUrn\\n      name\\n      emails\\n      __typename\\n    }\\n    agent {\\n      id\\n      avatarUrn\\n      __typename\\n    }\\n    department {\\n      id\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment notificationEdgeFragment on PagedNotificationsEdge {\\n  notification {\\n    __typename\\n    ... on TicketNotification {\\n      ...notificationResponseFragment\\n      __typename\\n    }\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":8,"time":23.97},"total":{"count":8,"time":23.97}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 209,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 679,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.854Z",
    time: 572.9090000968426,
    timings: {
      blocked: 1.0589999346137047,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.186,
      wait: 568.7839998857379,
      receive: 2.880000276491046,
      _blocked_queueing: 0.8169999346137047,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "353",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 353,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketLabels","variables":{},"query":"query getTicketLabels {\\n  labelDefs(labelType: tickets) {\\n    id\\n    label\\n    total\\n    color {\\n      __typename\\n      ... on StandardColor {\\n        name\\n        __typename\\n      }\\n      ... on HexColor {\\n        hex\\n        __typename\\n      }\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":6,"time":23.1},"total":{"count":6,"time":23.1}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 1104,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 836,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.848Z",
    time: 577.1419999655336,
    timings: {
      blocked: 0.9859999466240406,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.264,
      wait: 571.88299999322,
      receive: 4.009000025689602,
      _blocked_queueing: 0.7879999466240406,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "312",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 312,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketProblems","variables":{"isOpen":true},"query":"query getTicketProblems($isOpen: Boolean) {\\n  ticketProblems(isOpen: $isOpen) {\\n    ...onTicketProblem\\n    __typename\\n  }\\n}\\n\\nfragment onTicketProblem on TicketProblem {\\n  id\\n  title\\n  is_open\\n  ticketsCount\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":9,"time":20.61},"total":{"count":9,"time":20.61}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 499,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 654,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.846Z",
    time: 578.6240000743419,
    timings: {
      blocked: 0.8310001709759236,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.189,
      wait: 573.7050000167787,
      receive: 3.898999886587262,
      _blocked_queueing: 0.6340001709759235,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1223",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1223,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"ActiveChatConversations","variables":{},"query":"query ActiveChatConversations($after: String, $filter: AgentChatsFilter) {\\n  agentChatsCursor(first: 15, filter: $filter, after: $after) {\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    edges {\\n      id\\n      date_last_message\\n      displayOrder\\n      name\\n      participants {\\n        ...agentChatParticipant\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment agentChatParticipant on AgentChatParticipant {\\n  __typename\\n  ... on AgentChatParticipantAgent {\\n    agent {\\n      id\\n      avatarUrn\\n      display_name\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on AgentChatParticipantAgentTeam {\\n    agentTeam {\\n      name\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on AgentChatParticipantDepartment {\\n    department {\\n      avatarUrn\\n      title\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on AgentChatParticipantEveryone {\\n    isEveryone\\n    __typename\\n  }\\n  ... on AgentChatParticipantGroup {\\n    agent {\\n      id\\n      avatarUrn\\n      display_name\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":19,"time":45.68},"total":{"count":19,"time":45.68}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 2507,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1057,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.854Z",
    time: 782.9609999898821,
    timings: {
      blocked: 0.9480001393407583,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.23399999999999999,
      wait: 779.9009999860227,
      receive: 1.8779998645186424,
      _blocked_queueing: 0.6910001393407583,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "memory",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/55AAAAAAAAAAAAAAA0/150-11.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "date",
          value: "Mon, 21 Jun 2021 17:41:59 GMT",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "etag",
          value: 'W/"65c52c8b7e83d224827c579dad0751c6"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="150-11.jpg"',
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="150-11.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "content-length",
          value: "6703",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 6703,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.649Z",
    time: 0.1400001347064972,
    timings: {
      blocked: -1,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.12500002048909664,
      receive: 0.01500011421740055,
      _blocked_queueing: -1,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1288",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1288,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getSnippetsAndCategories","variables":{},"query":"query getSnippetsAndCategories {\\n  snippets(perPage: 500) {\\n    snippets {\\n      id\\n      title\\n      is_private\\n      avatarUrn\\n      status\\n      usedCount\\n      author {\\n        id\\n        display_name\\n        __typename\\n      }\\n      categories {\\n        id\\n        parent {\\n          id\\n          __typename\\n        }\\n        title\\n        __typename\\n      }\\n      shortCodes {\\n        code\\n        language {\\n          id\\n          title\\n          locale\\n          __typename\\n        }\\n        __typename\\n      }\\n      date_created\\n      translations {\\n        language {\\n          id\\n          title\\n          locale\\n          __typename\\n        }\\n        content\\n        attachments {\\n          id\\n          filesize\\n          filename\\n          content_type\\n          file_url\\n          download_url\\n          date_created\\n          __typename\\n        }\\n        __typename\\n      }\\n      rating {\\n        positiveCount\\n        neutralCount\\n        negativeCount\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  snippetCategories {\\n    id\\n    title\\n    parent {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":85,"time":57},"total":{"count":85,"time":57}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 112469,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 16609,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.731Z",
    time: 909.7599999513477,
    timings: {
      blocked: 1.086000064060092,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.182,
      wait: 903.6089999586195,
      receive: 4.882999928668141,
      _blocked_queueing: 0.834000064060092,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "256",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 256,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"ticketTabInfo","variables":{"id":"2"},"query":"query ticketTabInfo($id: ID!) {\\n  ticket(id: $id) {\\n    id\\n    subject\\n    person {\\n      id\\n      display_name\\n      primary_email\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":14,"time":32.65},"total":{"count":14,"time":32.65}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 223,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 688,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.873Z",
    time: 943.6810000333935,
    timings: {
      blocked: 1.0820000347793102,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.178,
      wait: 939.9760000076294,
      receive: 2.4449999909847975,
      _blocked_queueing: 0.7690000347793102,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "263",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 263,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"ticketUsersTab","variables":{"id":"2"},"query":"query ticketUsersTab($id: ID!) {\\n  ticket(id: $id) {\\n    id\\n    subject\\n    person {\\n      id\\n      __typename\\n    }\\n    ccs {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":15,"time":25.95},"total":{"count":15,"time":25.95}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 163,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 651,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.852Z",
    time: 965.0980001315475,
    timings: {
      blocked: 1.0199999879151582,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.14500000000000002,
      wait: 961.6320000849813,
      receive: 2.3010000586509705,
      _blocked_queueing: 0.8239999879151583,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "413",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 413,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"ticketOrgTabInfo","variables":{"ticketId":"2"},"query":"query ticketOrgTabInfo($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    person {\\n      ...personWithOrgIdFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment personWithOrgIdFragment on UserInfo {\\n  id\\n  orgMember {\\n    id\\n    org {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":15,"time":37.9},"total":{"count":15,"time":37.9}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 215,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 634,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.855Z",
    time: 962.2140000574291,
    timings: {
      blocked: 0.9969999706447125,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.195,
      wait: 958.8279999115616,
      receive: 2.1940001752227545,
      _blocked_queueing: 0.7299999706447124,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "288",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 288,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"refreshVoiceCredentials","variables":{"accountId":"1"},"query":"mutation refreshVoiceCredentials($accountId: ID!) {\\n  refreshVoiceCredentials(accountId: $accountId) {\\n    ... on VoiceTwilioCredentials {\\n      token\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:23 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":7,"time":15.78},"total":{"count":7,"time":15.78}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 446,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 872,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.253Z",
    time: 742.1760000288486,
    timings: {
      blocked: 1.1669998148232699,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.15499999999999997,
      wait: 740.2629999048114,
      receive: 0.5910003092139959,
      _blocked_queueing: 0.8929998148232698,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "High",
    _resourceType: "xhr",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://sdk.twilio.com/js/client/sounds/releases/1.0.0/disconnect.mp3?cache=1.14.0",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value: "https://master.next.deskprodemo.com/",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [
        {
          name: "cache",
          value: "1.14.0",
        },
      ],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "content-type",
          value: "audio/mpeg",
        },
        {
          name: "content-length",
          value: "14418",
        },
        {
          name: "date",
          value: "Mon, 10 May 2021 17:32:49 GMT",
        },
        {
          name: "access-control-allow-origin",
          value: "*",
        },
        {
          name: "access-control-allow-methods",
          value: "GET",
        },
        {
          name: "access-control-max-age",
          value: "3000",
        },
        {
          name: "cache-control",
          value: "max-age=315360000",
        },
        {
          name: "expires",
          value: "Thu, 31 Dec 2037 23:55:55 GMT",
        },
        {
          name: "last-modified",
          value: "Mon, 25 Apr 2016 23:47:29 GMT",
        },
        {
          name: "x-amz-version-id",
          value: "null",
        },
        {
          name: "etag",
          value: '"fa742e198b96d768aa16186aaa9ed945"',
        },
        {
          name: "server",
          value: "AmazonS3",
        },
        {
          name: "x-cache",
          value: "Hit from cloudfront",
        },
        {
          name: "via",
          value:
            "1.1 d124c249f6bd52641e04ffb388920c68.cloudfront.net (CloudFront)",
        },
        {
          name: "x-amz-cf-pop",
          value: "LHR50-C1",
        },
        {
          name: "x-amz-cf-id",
          value: "o48IdS73aIilNDR8anRCd2SCpiMkCVXTJZ8DKF2NmmPXqhBSx7iuAA==",
        },
        {
          name: "age",
          value: "3629351",
        },
      ],
      cookies: [],
      content: {
        size: 14418,
        mimeType: "audio/mpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "143.204.178.68",
    startedDateTime: "2021-06-25T08:41:24.003Z",
    time: 1.4880001544952393,
    timings: {
      blocked: 0.8870001858919859,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.26399996365606787,
      receive: 0.3370000049471855,
      _blocked_queueing: 0.8500001858919859,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "High",
    _resourceType: "xhr",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://sdk.twilio.com/js/client/sounds/releases/1.0.0/dtmf-0.mp3?cache=1.14.0",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value: "https://master.next.deskprodemo.com/",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [
        {
          name: "cache",
          value: "1.14.0",
        },
      ],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "content-type",
          value: "audio/mpeg",
        },
        {
          name: "content-length",
          value: "4389",
        },
        {
          name: "date",
          value: "Mon, 10 May 2021 17:32:49 GMT",
        },
        {
          name: "access-control-allow-origin",
          value: "*",
        },
        {
          name: "access-control-allow-methods",
          value: "GET",
        },
        {
          name: "access-control-max-age",
          value: "3000",
        },
        {
          name: "cache-control",
          value: "max-age=315360000",
        },
        {
          name: "expires",
          value: "Thu, 31 Dec 2037 23:55:55 GMT",
        },
        {
          name: "last-modified",
          value: "Mon, 25 Apr 2016 23:47:30 GMT",
        },
        {
          name: "x-amz-version-id",
          value: "null",
        },
        {
          name: "etag",
          value: '"a51ab2f349d4afc49c59aeeeca10dd9f"',
        },
        {
          name: "server",
          value: "AmazonS3",
        },
        {
          name: "x-cache",
          value: "Hit from cloudfront",
        },
        {
          name: "via",
          value:
            "1.1 d124c249f6bd52641e04ffb388920c68.cloudfront.net (CloudFront)",
        },
        {
          name: "x-amz-cf-pop",
          value: "LHR50-C1",
        },
        {
          name: "x-amz-cf-id",
          value: "JFetSe9o885iCJ2BTOGDy15i5zFDJzqyXFb_4F9jDheA6yFKPsuXnQ==",
        },
        {
          name: "age",
          value: "3629351",
        },
      ],
      cookies: [],
      content: {
        size: 4389,
        mimeType: "audio/mpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "143.204.178.68",
    startedDateTime: "2021-06-25T08:41:24.004Z",
    time: 1.6789999790489674,
    timings: {
      blocked: 1.1190001659542321,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.25500005181133745,
      receive: 0.3049997612833977,
      _blocked_queueing: 1.0920001659542322,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "High",
    _resourceType: "xhr",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://sdk.twilio.com/js/client/sounds/releases/1.0.0/dtmf-1.mp3?cache=1.14.0",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value: "https://master.next.deskprodemo.com/",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [
        {
          name: "cache",
          value: "1.14.0",
        },
      ],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "content-type",
          value: "audio/mpeg",
        },
        {
          name: "content-length",
          value: "8613",
        },
        {
          name: "date",
          value: "Mon, 10 May 2021 17:32:49 GMT",
        },
        {
          name: "access-control-allow-origin",
          value: "*",
        },
        {
          name: "access-control-allow-methods",
          value: "GET",
        },
        {
          name: "access-control-max-age",
          value: "3000",
        },
        {
          name: "cache-control",
          value: "max-age=315360000",
        },
        {
          name: "expires",
          value: "Thu, 31 Dec 2037 23:55:55 GMT",
        },
        {
          name: "last-modified",
          value: "Mon, 25 Apr 2016 23:47:30 GMT",
        },
        {
          name: "x-amz-version-id",
          value: "null",
        },
        {
          name: "etag",
          value: '"d72dbc88ee9bede04a29526585af638a"',
        },
        {
          name: "server",
          value: "AmazonS3",
        },
        {
          name: "x-cache",
          value: "Hit from cloudfront",
        },
        {
          name: "via",
          value:
            "1.1 d124c249f6bd52641e04ffb388920c68.cloudfront.net (CloudFront)",
        },
        {
          name: "x-amz-cf-pop",
          value: "LHR50-C1",
        },
        {
          name: "x-amz-cf-id",
          value: "1jVmpjA0eUV8qXwCkRKe7XIeCPq5KeYzanxIzVjM0jbVlitjrfpZFQ==",
        },
        {
          name: "age",
          value: "3629351",
        },
      ],
      cookies: [],
      content: {
        size: 8613,
        mimeType: "audio/mpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "143.204.178.68",
    startedDateTime: "2021-06-25T08:41:24.005Z",
    time: 1.6299998387694359,
    timings: {
      blocked: 1.0869999299049378,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.2850000398010015,
      receive: 0.2579998690634966,
      _blocked_queueing: 1.0609999299049377,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "High",
    _resourceType: "xhr",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://sdk.twilio.com/js/client/sounds/releases/1.0.0/dtmf-2.mp3?cache=1.14.0",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value: "https://master.next.deskprodemo.com/",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [
        {
          name: "cache",
          value: "1.14.0",
        },
      ],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "content-type",
          value: "audio/mpeg",
        },
        {
          name: "content-length",
          value: "8613",
        },
        {
          name: "date",
          value: "Mon, 10 May 2021 17:32:49 GMT",
        },
        {
          name: "access-control-allow-origin",
          value: "*",
        },
        {
          name: "access-control-allow-methods",
          value: "GET",
        },
        {
          name: "access-control-max-age",
          value: "3000",
        },
        {
          name: "cache-control",
          value: "max-age=315360000",
        },
        {
          name: "expires",
          value: "Thu, 31 Dec 2037 23:55:55 GMT",
        },
        {
          name: "last-modified",
          value: "Mon, 25 Apr 2016 23:47:31 GMT",
        },
        {
          name: "x-amz-version-id",
          value: "null",
        },
        {
          name: "etag",
          value: '"ea995f1b5d46b5cc1e97a1f150b14166"',
        },
        {
          name: "server",
          value: "AmazonS3",
        },
        {
          name: "x-cache",
          value: "Hit from cloudfront",
        },
        {
          name: "via",
          value:
            "1.1 d124c249f6bd52641e04ffb388920c68.cloudfront.net (CloudFront)",
        },
        {
          name: "x-amz-cf-pop",
          value: "LHR50-C1",
        },
        {
          name: "x-amz-cf-id",
          value: "nKA09dB9fEMKeJrnpSxGqwXrUefZ_sWbBujR2Fpn-DS7gT_2h5EUjQ==",
        },
        {
          name: "age",
          value: "3629351",
        },
      ],
      cookies: [],
      content: {
        size: 8613,
        mimeType: "audio/mpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "143.204.178.68",
    startedDateTime: "2021-06-25T08:41:24.006Z",
    time: 1.464000204578042,
    timings: {
      blocked: 0.8910000825077296,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.3069999592602253,
      receive: 0.2660001628100872,
      _blocked_queueing: 0.8670000825077295,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "High",
    _resourceType: "xhr",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://sdk.twilio.com/js/client/sounds/releases/1.0.0/dtmf-3.mp3?cache=1.14.0",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value: "https://master.next.deskprodemo.com/",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [
        {
          name: "cache",
          value: "1.14.0",
        },
      ],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "content-type",
          value: "audio/mpeg",
        },
        {
          name: "content-length",
          value: "8613",
        },
        {
          name: "date",
          value: "Mon, 10 May 2021 17:32:49 GMT",
        },
        {
          name: "access-control-allow-origin",
          value: "*",
        },
        {
          name: "access-control-allow-methods",
          value: "GET",
        },
        {
          name: "access-control-max-age",
          value: "3000",
        },
        {
          name: "cache-control",
          value: "max-age=315360000",
        },
        {
          name: "expires",
          value: "Thu, 31 Dec 2037 23:55:55 GMT",
        },
        {
          name: "last-modified",
          value: "Mon, 25 Apr 2016 23:47:32 GMT",
        },
        {
          name: "x-amz-version-id",
          value: "null",
        },
        {
          name: "etag",
          value: '"4a5133e21ae8a5e32f00d10b094bc8fb"',
        },
        {
          name: "server",
          value: "AmazonS3",
        },
        {
          name: "x-cache",
          value: "Hit from cloudfront",
        },
        {
          name: "via",
          value:
            "1.1 d124c249f6bd52641e04ffb388920c68.cloudfront.net (CloudFront)",
        },
        {
          name: "x-amz-cf-pop",
          value: "LHR50-C1",
        },
        {
          name: "x-amz-cf-id",
          value: "5Lxw3o_HW2b4F_wOa8mdq3p9y08Qk7yDFJvj8liLLnnOFrj_F5-6bg==",
        },
        {
          name: "age",
          value: "3629351",
        },
      ],
      cookies: [],
      content: {
        size: 8613,
        mimeType: "audio/mpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "143.204.178.68",
    startedDateTime: "2021-06-25T08:41:24.007Z",
    time: 1.4929999597370625,
    timings: {
      blocked: 0.9059999562799931,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.24899999089539052,
      receive: 0.3380000125616789,
      _blocked_queueing: 0.8809999562799931,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "High",
    _resourceType: "xhr",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://sdk.twilio.com/js/client/sounds/releases/1.0.0/dtmf-4.mp3?cache=1.14.0",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value: "https://master.next.deskprodemo.com/",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [
        {
          name: "cache",
          value: "1.14.0",
        },
      ],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "content-type",
          value: "audio/mpeg",
        },
        {
          name: "content-length",
          value: "8613",
        },
        {
          name: "date",
          value: "Mon, 10 May 2021 17:32:49 GMT",
        },
        {
          name: "access-control-allow-origin",
          value: "*",
        },
        {
          name: "access-control-allow-methods",
          value: "GET",
        },
        {
          name: "access-control-max-age",
          value: "3000",
        },
        {
          name: "cache-control",
          value: "max-age=315360000",
        },
        {
          name: "expires",
          value: "Thu, 31 Dec 2037 23:55:55 GMT",
        },
        {
          name: "last-modified",
          value: "Mon, 25 Apr 2016 23:47:32 GMT",
        },
        {
          name: "x-amz-version-id",
          value: "null",
        },
        {
          name: "etag",
          value: '"61aaa3394cc44cd9a04174f79dbbe240"',
        },
        {
          name: "server",
          value: "AmazonS3",
        },
        {
          name: "x-cache",
          value: "Hit from cloudfront",
        },
        {
          name: "via",
          value:
            "1.1 d124c249f6bd52641e04ffb388920c68.cloudfront.net (CloudFront)",
        },
        {
          name: "x-amz-cf-pop",
          value: "LHR50-C1",
        },
        {
          name: "x-amz-cf-id",
          value: "lYQfVTTJIco8f0x8H75TKatNg9rOO8BCzJo3EBYjuRQZePGenE7Yiw==",
        },
        {
          name: "age",
          value: "3629351",
        },
      ],
      cookies: [],
      content: {
        size: 8613,
        mimeType: "audio/mpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "143.204.178.68",
    startedDateTime: "2021-06-25T08:41:24.008Z",
    time: 1.4959999825805426,
    timings: {
      blocked: 0.995999935477972,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.21499997244775296,
      receive: 0.2850000746548176,
      _blocked_queueing: 0.969999935477972,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "High",
    _resourceType: "xhr",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://sdk.twilio.com/js/client/sounds/releases/1.0.0/dtmf-5.mp3?cache=1.14.0",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value: "https://master.next.deskprodemo.com/",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [
        {
          name: "cache",
          value: "1.14.0",
        },
      ],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "content-type",
          value: "audio/mpeg",
        },
        {
          name: "content-length",
          value: "8613",
        },
        {
          name: "date",
          value: "Mon, 10 May 2021 17:32:49 GMT",
        },
        {
          name: "access-control-allow-origin",
          value: "*",
        },
        {
          name: "access-control-allow-methods",
          value: "GET",
        },
        {
          name: "access-control-max-age",
          value: "3000",
        },
        {
          name: "cache-control",
          value: "max-age=315360000",
        },
        {
          name: "expires",
          value: "Thu, 31 Dec 2037 23:55:55 GMT",
        },
        {
          name: "last-modified",
          value: "Mon, 25 Apr 2016 23:47:33 GMT",
        },
        {
          name: "x-amz-version-id",
          value: "null",
        },
        {
          name: "etag",
          value: '"4e5fecaaa5e027a7da9059fb13597659"',
        },
        {
          name: "server",
          value: "AmazonS3",
        },
        {
          name: "x-cache",
          value: "Hit from cloudfront",
        },
        {
          name: "via",
          value:
            "1.1 d124c249f6bd52641e04ffb388920c68.cloudfront.net (CloudFront)",
        },
        {
          name: "x-amz-cf-pop",
          value: "LHR50-C1",
        },
        {
          name: "x-amz-cf-id",
          value: "C_JAahu0qvFMuJt9YY_YFroJVF6Uiq3F2DZHbC8TzO-ZeIGuq6vAvA==",
        },
        {
          name: "age",
          value: "3629351",
        },
      ],
      cookies: [],
      content: {
        size: 8613,
        mimeType: "audio/mpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "143.204.178.68",
    startedDateTime: "2021-06-25T08:41:24.009Z",
    time: 1.3830000534653664,
    timings: {
      blocked: 0.9210000704973936,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.20699990391731263,
      receive: 0.25500007905066013,
      _blocked_queueing: 0.8960000704973936,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "High",
    _resourceType: "xhr",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://sdk.twilio.com/js/client/sounds/releases/1.0.0/dtmf-7.mp3?cache=1.14.0",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value: "https://master.next.deskprodemo.com/",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [
        {
          name: "cache",
          value: "1.14.0",
        },
      ],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "content-type",
          value: "audio/mpeg",
        },
        {
          name: "content-length",
          value: "8613",
        },
        {
          name: "date",
          value: "Mon, 10 May 2021 17:32:49 GMT",
        },
        {
          name: "access-control-allow-origin",
          value: "*",
        },
        {
          name: "access-control-allow-methods",
          value: "GET",
        },
        {
          name: "access-control-max-age",
          value: "3000",
        },
        {
          name: "cache-control",
          value: "max-age=315360000",
        },
        {
          name: "expires",
          value: "Thu, 31 Dec 2037 23:55:55 GMT",
        },
        {
          name: "last-modified",
          value: "Mon, 25 Apr 2016 23:47:34 GMT",
        },
        {
          name: "x-amz-version-id",
          value: "null",
        },
        {
          name: "etag",
          value: '"ba927e1ace7e528a16ca4be95b864bfb"',
        },
        {
          name: "server",
          value: "AmazonS3",
        },
        {
          name: "x-cache",
          value: "Hit from cloudfront",
        },
        {
          name: "via",
          value:
            "1.1 d124c249f6bd52641e04ffb388920c68.cloudfront.net (CloudFront)",
        },
        {
          name: "x-amz-cf-pop",
          value: "LHR50-C1",
        },
        {
          name: "x-amz-cf-id",
          value: "-0QWWHGfOiI2iv5-VU4v3HBeb-0ZsRZeu9STg90Pg03pzfyPmWj_Rg==",
        },
        {
          name: "age",
          value: "3629351",
        },
      ],
      cookies: [],
      content: {
        size: 8613,
        mimeType: "audio/mpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "143.204.178.68",
    startedDateTime: "2021-06-25T08:41:24.011Z",
    time: 1.27399992197752,
    timings: {
      blocked: 0.7819999510198832,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.24199992997944356,
      receive: 0.2500000409781933,
      _blocked_queueing: 0.7579999510198832,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "High",
    _resourceType: "xhr",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://sdk.twilio.com/js/client/sounds/releases/1.0.0/dtmf-8.mp3?cache=1.14.0",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value: "https://master.next.deskprodemo.com/",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [
        {
          name: "cache",
          value: "1.14.0",
        },
      ],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "content-type",
          value: "audio/mpeg",
        },
        {
          name: "content-length",
          value: "8613",
        },
        {
          name: "date",
          value: "Mon, 10 May 2021 17:32:49 GMT",
        },
        {
          name: "access-control-allow-origin",
          value: "*",
        },
        {
          name: "access-control-allow-methods",
          value: "GET",
        },
        {
          name: "access-control-max-age",
          value: "3000",
        },
        {
          name: "cache-control",
          value: "max-age=315360000",
        },
        {
          name: "expires",
          value: "Thu, 31 Dec 2037 23:55:55 GMT",
        },
        {
          name: "last-modified",
          value: "Mon, 25 Apr 2016 23:47:35 GMT",
        },
        {
          name: "x-amz-version-id",
          value: "null",
        },
        {
          name: "etag",
          value: '"48300a56241131504aaf2cf3e65d9899"',
        },
        {
          name: "server",
          value: "AmazonS3",
        },
        {
          name: "x-cache",
          value: "Hit from cloudfront",
        },
        {
          name: "via",
          value:
            "1.1 d124c249f6bd52641e04ffb388920c68.cloudfront.net (CloudFront)",
        },
        {
          name: "x-amz-cf-pop",
          value: "LHR50-C1",
        },
        {
          name: "x-amz-cf-id",
          value: "ijzLdzbQhf-123tTh5EVb7rwVUuHUnXjoniUmEAPPWJxeTviN6ektg==",
        },
        {
          name: "age",
          value: "3629351",
        },
      ],
      cookies: [],
      content: {
        size: 8613,
        mimeType: "audio/mpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "143.204.178.68",
    startedDateTime: "2021-06-25T08:41:24.012Z",
    time: 1.2370001059025526,
    timings: {
      blocked: 0.8000000804662705,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.18799999207258225,
      receive: 0.2490000333636999,
      _blocked_queueing: 0.7750000804662704,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "High",
    _resourceType: "xhr",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://sdk.twilio.com/js/client/sounds/releases/1.0.0/dtmf-9.mp3?cache=1.14.0",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value: "https://master.next.deskprodemo.com/",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [
        {
          name: "cache",
          value: "1.14.0",
        },
      ],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "content-type",
          value: "audio/mpeg",
        },
        {
          name: "content-length",
          value: "8613",
        },
        {
          name: "date",
          value: "Mon, 10 May 2021 17:32:49 GMT",
        },
        {
          name: "access-control-allow-origin",
          value: "*",
        },
        {
          name: "access-control-allow-methods",
          value: "GET",
        },
        {
          name: "access-control-max-age",
          value: "3000",
        },
        {
          name: "cache-control",
          value: "max-age=315360000",
        },
        {
          name: "expires",
          value: "Thu, 31 Dec 2037 23:55:55 GMT",
        },
        {
          name: "last-modified",
          value: "Mon, 25 Apr 2016 23:47:36 GMT",
        },
        {
          name: "x-amz-version-id",
          value: "null",
        },
        {
          name: "etag",
          value: '"426be99c502a6f596dd28071c32e2575"',
        },
        {
          name: "server",
          value: "AmazonS3",
        },
        {
          name: "x-cache",
          value: "Hit from cloudfront",
        },
        {
          name: "via",
          value:
            "1.1 d124c249f6bd52641e04ffb388920c68.cloudfront.net (CloudFront)",
        },
        {
          name: "x-amz-cf-pop",
          value: "LHR50-C1",
        },
        {
          name: "x-amz-cf-id",
          value: "dunzNYwgknBCqXU4ZYszwR1ImVPf10DX2ExAMlKnAy3dmaldUZXR7w==",
        },
        {
          name: "age",
          value: "3629351",
        },
      ],
      cookies: [],
      content: {
        size: 8613,
        mimeType: "audio/mpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "143.204.178.68",
    startedDateTime: "2021-06-25T08:41:24.013Z",
    time: 1.2940000742673874,
    timings: {
      blocked: 0.8000000880807638,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.21099992676079274,
      receive: 0.28300005942583084,
      _blocked_queueing: 0.7760000880807638,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "High",
    _resourceType: "xhr",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://sdk.twilio.com/js/client/sounds/releases/1.0.0/dtmf-star.mp3?cache=1.14.0",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value: "https://master.next.deskprodemo.com/",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [
        {
          name: "cache",
          value: "1.14.0",
        },
      ],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "content-type",
          value: "audio/mpeg",
        },
        {
          name: "content-length",
          value: "8613",
        },
        {
          name: "date",
          value: "Mon, 10 May 2021 17:32:49 GMT",
        },
        {
          name: "access-control-allow-origin",
          value: "*",
        },
        {
          name: "access-control-allow-methods",
          value: "GET",
        },
        {
          name: "access-control-max-age",
          value: "3000",
        },
        {
          name: "cache-control",
          value: "max-age=315360000",
        },
        {
          name: "expires",
          value: "Thu, 31 Dec 2037 23:55:55 GMT",
        },
        {
          name: "last-modified",
          value: "Mon, 25 Apr 2016 23:47:37 GMT",
        },
        {
          name: "x-amz-version-id",
          value: "null",
        },
        {
          name: "etag",
          value: '"532480f215972c11ad5a9157699f55ed"',
        },
        {
          name: "server",
          value: "AmazonS3",
        },
        {
          name: "x-cache",
          value: "Hit from cloudfront",
        },
        {
          name: "via",
          value:
            "1.1 d124c249f6bd52641e04ffb388920c68.cloudfront.net (CloudFront)",
        },
        {
          name: "x-amz-cf-pop",
          value: "LHR50-C1",
        },
        {
          name: "x-amz-cf-id",
          value: "qUL-xysw9QKyLhHJxEGGU9__HRtxM3PwjZb1MEemdtfC7z8jzOyxAQ==",
        },
        {
          name: "age",
          value: "3629351",
        },
      ],
      cookies: [],
      content: {
        size: 8613,
        mimeType: "audio/mpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "143.204.178.68",
    startedDateTime: "2021-06-25T08:41:24.015Z",
    time: 1.2680001091212034,
    timings: {
      blocked: 0.8210000075399876,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.1960000529885292,
      receive: 0.25100004859268665,
      _blocked_queueing: 0.7960000075399876,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "High",
    _resourceType: "xhr",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://sdk.twilio.com/js/client/sounds/releases/1.0.0/incoming.mp3?cache=1.14.0",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value: "https://master.next.deskprodemo.com/",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [
        {
          name: "cache",
          value: "1.14.0",
        },
      ],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "content-type",
          value: "audio/mpeg",
        },
        {
          name: "content-length",
          value: "52035",
        },
        {
          name: "date",
          value: "Mon, 10 May 2021 17:48:45 GMT",
        },
        {
          name: "access-control-allow-origin",
          value: "*",
        },
        {
          name: "access-control-allow-methods",
          value: "GET",
        },
        {
          name: "access-control-max-age",
          value: "3000",
        },
        {
          name: "cache-control",
          value: "max-age=315360000",
        },
        {
          name: "expires",
          value: "Thu, 31 Dec 2037 23:55:55 GMT",
        },
        {
          name: "last-modified",
          value: "Mon, 25 Apr 2016 23:47:38 GMT",
        },
        {
          name: "x-amz-version-id",
          value: "null",
        },
        {
          name: "etag",
          value: '"a3e1087909375cfa43524e17ed905750"',
        },
        {
          name: "server",
          value: "AmazonS3",
        },
        {
          name: "x-cache",
          value: "Hit from cloudfront",
        },
        {
          name: "via",
          value:
            "1.1 d124c249f6bd52641e04ffb388920c68.cloudfront.net (CloudFront)",
        },
        {
          name: "x-amz-cf-pop",
          value: "LHR50-C1",
        },
        {
          name: "x-amz-cf-id",
          value: "pGqKayQIOlu1Z-AhmA-zFKsrOyIuW5uxZrdhgAFu8VJGqQuFo2eP0w==",
        },
        {
          name: "age",
          value: "3628395",
        },
      ],
      cookies: [],
      content: {
        size: 52035,
        mimeType: "audio/mpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "143.204.178.68",
    startedDateTime: "2021-06-25T08:41:24.016Z",
    time: 1.2770001776516438,
    timings: {
      blocked: 0.8189999923110008,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.18799999207258225,
      receive: 0.2700001932680607,
      _blocked_queueing: 0.7939999923110008,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "High",
    _resourceType: "xhr",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://sdk.twilio.com/js/client/sounds/releases/1.0.0/outgoing.mp3?cache=1.14.0",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value: "https://master.next.deskprodemo.com/",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [
        {
          name: "cache",
          value: "1.14.0",
        },
      ],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "content-type",
          value: "audio/mpeg",
        },
        {
          name: "content-length",
          value: "42624",
        },
        {
          name: "date",
          value: "Mon, 10 May 2021 18:33:07 GMT",
        },
        {
          name: "access-control-allow-origin",
          value: "*",
        },
        {
          name: "access-control-allow-methods",
          value: "GET",
        },
        {
          name: "access-control-max-age",
          value: "3000",
        },
        {
          name: "cache-control",
          value: "max-age=315360000",
        },
        {
          name: "expires",
          value: "Thu, 31 Dec 2037 23:55:55 GMT",
        },
        {
          name: "last-modified",
          value: "Mon, 25 Apr 2016 23:47:38 GMT",
        },
        {
          name: "x-amz-version-id",
          value: "null",
        },
        {
          name: "etag",
          value: '"51d1ce507576c17f4b9c2b2b83d78883"',
        },
        {
          name: "server",
          value: "AmazonS3",
        },
        {
          name: "x-cache",
          value: "Hit from cloudfront",
        },
        {
          name: "via",
          value:
            "1.1 d124c249f6bd52641e04ffb388920c68.cloudfront.net (CloudFront)",
        },
        {
          name: "x-amz-cf-pop",
          value: "LHR50-C1",
        },
        {
          name: "x-amz-cf-id",
          value: "gIqIAw-uS1x6K139J6m-Bw5lsuwzZxIJRepKhyXgBwbGqJRqZ1lREg==",
        },
        {
          name: "age",
          value: "3625733",
        },
      ],
      cookies: [],
      content: {
        size: 42624,
        mimeType: "audio/mpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "143.204.178.68",
    startedDateTime: "2021-06-25T08:41:24.017Z",
    time: 1.3119999784976244,
    timings: {
      blocked: 0.8019998780936003,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.19300001491606236,
      receive: 0.31700008548796177,
      _blocked_queueing: 0.7789998780936003,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/sys/services/broadcaster/93c1e911-9953-41de-af13-2dde59c008e9/join?a=vSDqkI3RQYkDErzK8v7HK5AwguhFrg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value:
            "/sys/services/broadcaster/93c1e911-9953-41de-af13-2dde59c008e9/join?a=vSDqkI3RQYkDErzK8v7HK5AwguhFrg",
        },
        {
          name: "content-length",
          value: "404",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [
        {
          name: "a",
          value: "vSDqkI3RQYkDErzK8v7HK5AwguhFrg",
        },
      ],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 404,
      postData: {
        mimeType: "application/json",
        text: '{"channels":["eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZXNrcHJvIiwic3ViIjoiMSIsImNoYW5uZWxJZCI6Im1lc3Nlbmdlci1xdWV1ZToxIiwiZXhwIjoxNjI0NjEwNzgzLjQ0NTAyMX0.nTbBJRcu60WURRCmvG2k6yvq1WdD0_YxWmljPnXanR4","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZXNrcHJvIiwic3ViIjoiMSIsImNoYW5uZWxJZCI6Im1lc3Nlbmdlci1xdWV1ZToyIiwiZXhwIjoxNjI0NjEwNzgzLjQ0NTE0Nn0.86bjDi2-ieWm0Qwns4XRxVJQ0BXYQusvOvB29NGOHkk"]}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 62,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 472,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.727Z",
    time: 446.80000003427267,
    timings: {
      blocked: 1.3300000986009837,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.21900000000000003,
      wait: 443.32299992325903,
      receive: 1.9280000124126673,
      _blocked_queueing: 1.0220000986009836,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "627",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 627,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFilterCount","variables":{"filterId":"4","groupBy":[]},"query":"query getTicketFilterCount($filterId: ID!, $groupBy: [TicketFieldInput!]) {\\n  myFilter(id: $filterId) {\\n    id\\n    counts(groupBy: $groupBy) {\\n      ...ticketFilterListCountFragment\\n      subCounts {\\n        ...ticketFilterListCountFragment\\n        subCounts {\\n          ...ticketFilterListCountFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketFilterListCountFragment on CountBadge {\\n  type\\n  value\\n  title\\n  count\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":22.52},"total":{"count":11,"time":22.52}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 185,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 641,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.454Z",
    time: 719.4819999858737,
    timings: {
      blocked: 1.070000029206276,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.146,
      wait: 716.4500000985861,
      receive: 1.8159998580813408,
      _blocked_queueing: 0.8600000292062759,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "627",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 627,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFilterCount","variables":{"filterId":"5","groupBy":[]},"query":"query getTicketFilterCount($filterId: ID!, $groupBy: [TicketFieldInput!]) {\\n  myFilter(id: $filterId) {\\n    id\\n    counts(groupBy: $groupBy) {\\n      ...ticketFilterListCountFragment\\n      subCounts {\\n        ...ticketFilterListCountFragment\\n        subCounts {\\n          ...ticketFilterListCountFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketFilterListCountFragment on CountBadge {\\n  type\\n  value\\n  title\\n  count\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":20.08},"total":{"count":11,"time":20.08}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 185,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 641,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.459Z",
    time: 714.7559998556972,
    timings: {
      blocked: 1.1699998593330383,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.141,
      wait: 711.7839999215454,
      receive: 1.6610000748187304,
      _blocked_queueing: 0.9599998593330383,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1221",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1221,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"GetAllNewNotifications","variables":{},"query":"query GetAllNewNotifications($after: String) {\\n  myNotifications(first: 100, filter: {isDismissed: false}, after: $after) {\\n    totalCount\\n    totalDismissedCount\\n    totalNewCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    edges {\\n      ...notificationEdgeFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment notificationResponseFragment on TicketNotification {\\n  id\\n  personId\\n  isDismissed\\n  dateCreated\\n  title\\n  body\\n  ticket {\\n    id\\n    subject\\n    urgency\\n    date_last_agent_reply\\n    date_last_user_reply\\n    status {\\n      id\\n      status_type\\n      title\\n      __typename\\n    }\\n    person {\\n      id\\n      avatarUrn\\n      name\\n      emails\\n      __typename\\n    }\\n    agent {\\n      id\\n      avatarUrn\\n      __typename\\n    }\\n    department {\\n      id\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment notificationEdgeFragment on PagedNotificationsEdge {\\n  notification {\\n    __typename\\n    ... on TicketNotification {\\n      ...notificationResponseFragment\\n      __typename\\n    }\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":120,"time":85.92},"total":{"count":120,"time":85.92}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 15517,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1999,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.853Z",
    time: 1320.7270000129938,
    timings: {
      blocked: 0.8529998924583196,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.152,
      wait: 1317.5800001084358,
      receive: 2.142000012099743,
      _blocked_queueing: 0.6279998924583197,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "627",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 627,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFilterCount","variables":{"filterId":"2","groupBy":[]},"query":"query getTicketFilterCount($filterId: ID!, $groupBy: [TicketFieldInput!]) {\\n  myFilter(id: $filterId) {\\n    id\\n    counts(groupBy: $groupBy) {\\n      ...ticketFilterListCountFragment\\n      subCounts {\\n        ...ticketFilterListCountFragment\\n        subCounts {\\n          ...ticketFilterListCountFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketFilterListCountFragment on CountBadge {\\n  type\\n  value\\n  title\\n  count\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":23.73},"total":{"count":11,"time":23.73}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 184,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 639,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.458Z",
    time: 716.5679999161512,
    timings: {
      blocked: 1.2239999138116837,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.27499999999999997,
      wait: 713.492000101477,
      receive: 1.5769999008625746,
      _blocked_queueing: 0.9059999138116837,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "627",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 627,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFilterCount","variables":{"filterId":"8","groupBy":[]},"query":"query getTicketFilterCount($filterId: ID!, $groupBy: [TicketFieldInput!]) {\\n  myFilter(id: $filterId) {\\n    id\\n    counts(groupBy: $groupBy) {\\n      ...ticketFilterListCountFragment\\n      subCounts {\\n        ...ticketFilterListCountFragment\\n        subCounts {\\n          ...ticketFilterListCountFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketFilterListCountFragment on CountBadge {\\n  type\\n  value\\n  title\\n  count\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":20.32},"total":{"count":11,"time":20.32}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 185,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 641,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.455Z",
    time: 719.0620000474155,
    timings: {
      blocked: 1.2239998886138201,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.15899999999999997,
      wait: 716.1730001000763,
      receive: 1.5060000587254763,
      _blocked_queueing: 1.02499988861382,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "627",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 627,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFilterCount","variables":{"filterId":"6","groupBy":[]},"query":"query getTicketFilterCount($filterId: ID!, $groupBy: [TicketFieldInput!]) {\\n  myFilter(id: $filterId) {\\n    id\\n    counts(groupBy: $groupBy) {\\n      ...ticketFilterListCountFragment\\n      subCounts {\\n        ...ticketFilterListCountFragment\\n        subCounts {\\n          ...ticketFilterListCountFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketFilterListCountFragment on CountBadge {\\n  type\\n  value\\n  title\\n  count\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":21.4},"total":{"count":11,"time":21.4}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 184,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 639,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.456Z",
    time: 718.3930000755936,
    timings: {
      blocked: 0.9200002187043428,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.20400000000000001,
      wait: 715.8310000831186,
      receive: 1.4379997737705708,
      _blocked_queueing: 0.7320002187043428,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "memory",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/5AAAAAAAAAAAAAAA0/borat.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "date",
          value: "Mon, 21 Jun 2021 17:52:22 GMT",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "etag",
          value: 'W/"8c456a74baf0b5debb57802ef3d6f09e"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="borat.jpg"',
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="borat.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "content-length",
          value: "4671",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 4671,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.198Z",
    time: 0.12700003571808338,
    timings: {
      blocked: -1,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.11300016194581985,
      receive: 0.013999873772263527,
      _blocked_queueing: -1,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "memory",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/65AAAAAAAAAAAAAAA0/b_obama.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "date",
          value: "Mon, 21 Jun 2021 17:52:22 GMT",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "etag",
          value: 'W/"8b408569b7fc0d2fff4d006bc783da97"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="b_obama.jpg"',
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="b_obama.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "content-length",
          value: "13313",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 13313,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.199Z",
    time: 0.11499994434416294,
    timings: {
      blocked: -1,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.10099983774125576,
      receive: 0.01400010660290718,
      _blocked_queueing: -1,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "memory",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/69AAAAAAAAAAAAAAA0/mathieu_kassovitz1.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "date",
          value: "Mon, 21 Jun 2021 17:52:22 GMT",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "etag",
          value: 'W/"2b490817a1ec06444ddde2d090cf674b"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="mathieu_kassovitz1.jpg"',
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="mathieu_kassovitz1.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "content-length",
          value: "3757",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 3757,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.215Z",
    time: 0.12700003571808338,
    timings: {
      blocked: -1,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.11199992150068283,
      receive: 0.01500011421740055,
      _blocked_queueing: -1,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "memory",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/57AAAAAAAAAAAAAAA0/150-3.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "date",
          value: "Mon, 21 Jun 2021 17:52:22 GMT",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "etag",
          value: 'W/"e1f9ca242e112116359961aa23e79fca"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="150-3.jpg"',
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="150-3.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "content-length",
          value: "8371",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 8371,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.231Z",
    time: 0.12999982573091984,
    timings: {
      blocked: -1,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.11499994434416294,
      receive: 0.014999881386756897,
      _blocked_queueing: -1,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "memory",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/68AAAAAAAAAAAAAAA0/kate_middleton.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "date",
          value: "Mon, 21 Jun 2021 17:52:22 GMT",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "etag",
          value: 'W/"9d379edd3e31fdf2d6fab3a30126248a"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="kate_middleton.jpg"',
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="kate_middleton.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "content-length",
          value: "6901",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 6901,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.232Z",
    time: 0.11899997480213642,
    timings: {
      blocked: -1,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.10599987581372261,
      receive: 0.01300009898841381,
      _blocked_queueing: -1,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "185",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 185,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"orgAppTabInfo","variables":{"orgId":"50"},"query":"query orgAppTabInfo($orgId: ID!) {\\n  org(id: $orgId) {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":7,"time":13.51},"total":{"count":7,"time":13.51}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 179,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 662,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.861Z",
    time: 492.78600001707673,
    timings: {
      blocked: 1.1080000912994146,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.23500000000000004,
      wait: 488.9280001002699,
      receive: 2.5149998255074024,
      _blocked_queueing: 0.8070000912994146,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "627",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 627,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFilterCount","variables":{"filterId":"3","groupBy":[]},"query":"query getTicketFilterCount($filterId: ID!, $groupBy: [TicketFieldInput!]) {\\n  myFilter(id: $filterId) {\\n    id\\n    counts(groupBy: $groupBy) {\\n      ...ticketFilterListCountFragment\\n      subCounts {\\n        ...ticketFilterListCountFragment\\n        subCounts {\\n          ...ticketFilterListCountFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketFilterListCountFragment on CountBadge {\\n  type\\n  value\\n  title\\n  count\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":22.94},"total":{"count":11,"time":22.94}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 185,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 640,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.458Z",
    time: 894.7089998982847,
    timings: {
      blocked: 1.059999910593033,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.22199999999999998,
      wait: 890.6459999993741,
      receive: 2.7809999883174896,
      _blocked_queueing: 0.8749999105930328,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "627",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 627,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFilterCount","variables":{"filterId":"1","groupBy":[]},"query":"query getTicketFilterCount($filterId: ID!, $groupBy: [TicketFieldInput!]) {\\n  myFilter(id: $filterId) {\\n    id\\n    counts(groupBy: $groupBy) {\\n      ...ticketFilterListCountFragment\\n      subCounts {\\n        ...ticketFilterListCountFragment\\n        subCounts {\\n          ...ticketFilterListCountFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketFilterListCountFragment on CountBadge {\\n  type\\n  value\\n  title\\n  count\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":24.1},"total":{"count":11,"time":24.1}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 185,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 639,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.457Z",
    time: 896.3989999610931,
    timings: {
      blocked: 1.1789999507069588,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.256,
      wait: 892.3040000120998,
      receive: 2.6599999982863665,
      _blocked_queueing: 0.9719999507069588,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "627",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 627,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFilterCount","variables":{"filterId":"7","groupBy":[]},"query":"query getTicketFilterCount($filterId: ID!, $groupBy: [TicketFieldInput!]) {\\n  myFilter(id: $filterId) {\\n    id\\n    counts(groupBy: $groupBy) {\\n      ...ticketFilterListCountFragment\\n      subCounts {\\n        ...ticketFilterListCountFragment\\n        subCounts {\\n          ...ticketFilterListCountFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketFilterListCountFragment on CountBadge {\\n  type\\n  value\\n  title\\n  count\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":17.23},"total":{"count":11,"time":17.23}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 186,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 641,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.454Z",
    time: 899.7899999376386,
    timings: {
      blocked: 1.1200000488311053,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.17300000000000004,
      wait: 895.9210000644773,
      receive: 2.5759998243302107,
      _blocked_queueing: 0.8320000488311052,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "403",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 403,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getLabelDefs","variables":{"labelType":"organizations"},"query":"query getLabelDefs($labelType: LabelDefType) {\\n  labelDefs(labelType: $labelType) {\\n    id\\n    label\\n    total\\n    color {\\n      ... on StandardColor {\\n        name\\n        __typename\\n      }\\n      ... on HexColor {\\n        hex\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":6,"time":20.02},"total":{"count":6,"time":20.02}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 888,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 803,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.863Z",
    time: 492.5290001556277,
    timings: {
      blocked: 1.039000025987625,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.19699999999999998,
      wait: 487.766000048846,
      receive: 3.527000080794096,
      _blocked_queueing: 0.8290000259876251,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "283",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 283,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"userTab","variables":{"id":"1059"},"query":"query userTab($id: ID!) {\\n  user(id: $id) {\\n    ...userAppTabListFragment\\n    __typename\\n  }\\n}\\n\\nfragment userAppTabListFragment on UserInfo {\\n  id\\n  display_name\\n  avatarUrn\\n  primary_email\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":10,"time":17.66},"total":{"count":10,"time":17.66}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 215,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 688,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.864Z",
    time: 491.6189999785274,
    timings: {
      blocked: 1.2119999767690897,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.19200000000000003,
      wait: 486.6070000026822,
      receive: 3.607999999076128,
      _blocked_queueing: 1.0059999767690897,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "14794",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 14794,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"precacheTicketView","variables":{"ticketId":"2"},"query":"query precacheTicketView($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    ...CompleteTicket\\n    __typename\\n  }\\n}\\n\\nfragment CompleteTicket on Ticket {\\n  chats {\\n    id\\n    agent {\\n      id\\n      __typename\\n    }\\n    date_ended\\n    activeParticipants {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n  ...TicketHeaderInfoProps\\n  ...TicketTimesInfo\\n  agent {\\n    ...AgentInfoProps\\n    __typename\\n  }\\n  agent_team {\\n    ...AgentTeamInfoProps\\n    __typename\\n  }\\n  followers {\\n    ...AgentInfoProps\\n    __typename\\n  }\\n  person {\\n    id\\n    orgMember {\\n      id\\n      position\\n      isManager\\n      org {\\n        id\\n        __typename\\n      }\\n      __typename\\n    }\\n    ...BasicUserProps\\n    __typename\\n  }\\n  ccs {\\n    ...BasicUserProps\\n    __typename\\n  }\\n  slas {\\n    id\\n    sla_status\\n    warn_date\\n    fail_date\\n    is_completed\\n    is_completed_set\\n    __typename\\n  }\\n  department {\\n    ...DepInfoProps\\n    __typename\\n  }\\n  lock {\\n    ...TicketLockProps\\n    __typename\\n  }\\n  language {\\n    ...LangInfoProps\\n    __typename\\n  }\\n  brand {\\n    ...BrandInfoProps\\n    __typename\\n  }\\n  next_event {\\n    id\\n    type\\n    date\\n    __typename\\n  }\\n  links {\\n    parent {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n  fields {\\n    ...CustomFields\\n    __typename\\n  }\\n  phoneCalls {\\n    ...VoicePhoneCall\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment VoicePhoneCall on VoicePhoneCall {\\n  id\\n  dateCreated\\n  logs {\\n    ...VoiceLogs\\n    __typename\\n  }\\n  number {\\n    id\\n    number\\n    __typename\\n  }\\n  numberPlain\\n  externalNumber\\n  externalNumberType\\n  person {\\n    ...BasicUserProps\\n    __typename\\n  }\\n  recordingEnabled\\n  ticket {\\n    id\\n    __typename\\n  }\\n  status\\n  bcVoiceActiveCallChannel {\\n    channel\\n    token\\n    __typename\\n  }\\n  bcVoiceOutgoingCallChannel {\\n    channel\\n    token\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment VoiceLogs on VoicePhoneCallLog {\\n  ... on VoicePhoneCallNewIncomingLog {\\n    dateCreated\\n    fromNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallNewOutgoingLog {\\n    dateCreated\\n    toNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallUserDisconnectedLog {\\n    dateCreated\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallUserJoinedLog {\\n    dateCreated\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallUserLeftLog {\\n    dateCreated\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallStartedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallEndedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallFailedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentInviteTimeoutLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantHoldLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantMutedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantUnholdLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantUnmutedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentCancelInviteLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentDisconnectedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentHangupLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentIgnoreInviteLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentInvitedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentJoinedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentLeftLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentTransferLog {\\n    dateCreated\\n    targetAgent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    inviteType\\n    __typename\\n  }\\n  ... on VoicePhoneCallQueueTransferLog {\\n    dateCreated\\n    targetQueue {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantTransferLog {\\n    dateCreated\\n    targetAutoAttendant {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAnsweredLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantExtensionLog {\\n    dateCreated\\n    enteredCode\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressExtensionKeyLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressKeyLog {\\n    dateCreated\\n    pressedKey\\n    nullableAgent: targetAgent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    nullableQueue: targetQueue {\\n      id\\n      name\\n      __typename\\n    }\\n    nullableAutoAttendant: targetAutoAttendant {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressRepeatKeyLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressUnsupportedKeyLog {\\n    dateCreated\\n    pressedKey\\n    __typename\\n  }\\n  ... on VoicePhoneCallRecordingDownloadedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallRecordingDeletedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallForwardAnsweredLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    forwardedNumber\\n    __typename\\n  }\\n  ... on VoicePhoneCallRejectedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallTargetLog {\\n    dateCreated\\n    nullableAgent: targetAgent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    nullableQueue: targetQueue {\\n      id\\n      name\\n      __typename\\n    }\\n    nullableAutoAttendant: targetAutoAttendant {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TicketTimesInfo on Ticket {\\n  date_created\\n  date_user_waiting\\n  user_waiting_wh\\n  user_waiting\\n  total_user_waiting_wh\\n  total_user_waiting\\n  date_resolved\\n  time_to_resolve_wh\\n  time_to_resolve\\n  date_archived\\n  date_first_agent_assign\\n  date_first_agent_reply\\n  date_last_agent_reply\\n  date_last_user_reply\\n  __typename\\n}\\n\\nfragment TicketLockProps on TicketLock {\\n  id\\n  agent {\\n    ...AgentInfoProps\\n    __typename\\n  }\\n  date\\n  __typename\\n}\\n\\nfragment VoiceAgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TicketHeaderInfoProps on Ticket {\\n  id\\n  ref\\n  subject\\n  urgency\\n  myStar {\\n    color {\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  labels {\\n    ...LabelInfoProps\\n    __typename\\n  }\\n  status {\\n    ...TicketStatusInfoProps\\n    __typename\\n  }\\n  messages {\\n    totalCount\\n    __typename\\n  }\\n  lock {\\n    ...TicketLockProps\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment LabelInfoProps on LabelDef {\\n  color {\\n    ... on StandardColor {\\n      name\\n      __typename\\n    }\\n    ... on HexColor {\\n      hex\\n      __typename\\n    }\\n    __typename\\n  }\\n  id\\n  label\\n  __typename\\n}\\n\\nfragment TicketStatusInfoProps on TicketStatus {\\n  id\\n  status_type\\n  title\\n  effective_display_order\\n  parent {\\n    id\\n    title\\n    status_type\\n    __typename\\n  }\\n  children {\\n    id\\n    status_type\\n    title\\n    effective_display_order\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment AgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment AgentTeamInfoProps on AgentTeam {\\n  id\\n  name\\n  avatarUrn\\n  __typename\\n}\\n\\nfragment BasicUserProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  orgMember {\\n    id\\n    position\\n    isManager\\n    org {\\n      id\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DepInfoProps on TicketDepartment {\\n  id\\n  title\\n  avatarUrn\\n  parent {\\n    id\\n    title\\n    avatarUrn\\n    __typename\\n  }\\n  children {\\n    id\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment LangInfoProps on Language {\\n  id\\n  flagUrn\\n  title\\n  locale\\n  __typename\\n}\\n\\nfragment BrandInfoProps on Brand {\\n  id\\n  name\\n  iconUrl\\n  __typename\\n}\\n\\nfragment CustomFields on CustomValueType {\\n  ... on CustomChoiceValue {\\n    id\\n    def {\\n      ...ChoiceFieldDef\\n      __typename\\n    }\\n    selected {\\n      id\\n      title\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomDateValue {\\n    id\\n    def {\\n      ... on CustomDateDef {\\n        ...DateFieldDef\\n        __typename\\n      }\\n      ... on CustomDateTimeDef {\\n        ...DateTimeFieldDef\\n        __typename\\n      }\\n      __typename\\n    }\\n    date\\n    __typename\\n  }\\n  ... on CustomInputValue {\\n    id\\n    value\\n    def {\\n      ... on CustomCurrencyDef {\\n        ...CurrencyFieldDef\\n        __typename\\n      }\\n      ... on CustomTextareaDef {\\n        ...TextareaFieldDef\\n        __typename\\n      }\\n      ... on CustomTextDef {\\n        ...TextFieldDef\\n        __typename\\n      }\\n      ... on CustomUrlDef {\\n        ...UrlFieldDef\\n        __typename\\n      }\\n      ... on CustomNumberDef {\\n        ...NumberFieldDef\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomToggleValue {\\n    id\\n    def {\\n      ...ToggleFieldDef\\n      __typename\\n    }\\n    isChecked\\n    __typename\\n  }\\n  ... on CustomFileValue {\\n    id\\n    def {\\n      ...FileFieldDef\\n      __typename\\n    }\\n    files {\\n      id\\n      filesize\\n      filename\\n      content_type\\n      file_url\\n      download_url\\n      date_created\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomJavascriptValue {\\n    id\\n    value\\n    def {\\n      ...JavascriptFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomHiddenValue {\\n    id\\n    def {\\n      ...HiddenFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomDisplayValue {\\n    id\\n    def {\\n      ...DisplayFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ChoiceFieldDef on CustomChoiceDef {\\n  ...FieldDef\\n  options {\\n    id\\n    parent {\\n      id\\n      title\\n      __typename\\n    }\\n    children {\\n      id\\n      title\\n      __typename\\n    }\\n    title\\n    depth\\n    display_order\\n    effective_display_order\\n    __typename\\n  }\\n  choiceSettings: settings {\\n    style\\n    defaultOptionId\\n    userIsRequired\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment FieldDef on CustomFieldDef {\\n  __typename\\n  id\\n  title\\n  aliases\\n  description\\n  is_enabled\\n  display_order\\n  is_user_enabled\\n  is_agent_field\\n  defer_agent_validation\\n}\\n\\nfragment DateFieldDef on CustomDateDef {\\n  ...FieldDef\\n  dateSettings: settings {\\n    ...CustomDateSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CustomDateSettings on CustomDateSettings {\\n  defaultValue\\n  validWeekDays\\n  calendarType\\n  requireDateRange\\n  requireDateRangeDays\\n  userIsRequired\\n  agentIsRequired\\n  __typename\\n}\\n\\nfragment DateTimeFieldDef on CustomDateTimeDef {\\n  ...FieldDef\\n  dateSettings: settings {\\n    ...CustomDateSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CurrencyFieldDef on CustomCurrencyDef {\\n  ...FieldDef\\n  currencySettings: settings {\\n    currency {\\n      symbol\\n      decimal_places\\n      __typename\\n    }\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TextareaFieldDef on CustomTextareaDef {\\n  ...FieldDef\\n  textSettings: settings {\\n    ...CustomTextSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CustomTextSettings on CustomTextSettings {\\n  defaultValue\\n  parseLinks\\n  userValidation {\\n    minLength\\n    maxLength\\n    regexPattern\\n    regexRequired\\n    __typename\\n  }\\n  agentValidation {\\n    minLength\\n    maxLength\\n    regexPattern\\n    regexRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TextFieldDef on CustomTextDef {\\n  ...FieldDef\\n  textSettings: settings {\\n    ...CustomTextSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment UrlFieldDef on CustomUrlDef {\\n  ...FieldDef\\n  urlSettings: settings {\\n    allowNetworkLinks\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment NumberFieldDef on CustomNumberDef {\\n  ...FieldDef\\n  numberSettings: settings {\\n    defaultValue\\n    max\\n    min\\n    isSelect\\n    userIsRequired\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ToggleFieldDef on CustomToggleDef {\\n  ...FieldDef\\n  toggleSettings: settings {\\n    defaultState\\n    checkboxLabel\\n    uncheckedDisplayLabel\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment FileFieldDef on CustomFileDef {\\n  ...FieldDef\\n  fileSettings: settings {\\n    allowMultiple\\n    agentValidation {\\n      onlyAllowExt\\n      onlyRejectExt\\n      isRequired\\n      maxFileSize\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment JavascriptFieldDef on CustomJavascriptDef {\\n  ...FieldDef\\n  javascriptSettings: settings {\\n    code\\n    defaultValue\\n    parseLinks\\n    agentValidation {\\n      minLength\\n      maxLength\\n      regexPattern\\n      regexRequired\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment HiddenFieldDef on CustomHiddenDef {\\n  ...FieldDef\\n  hiddenSettings: settings {\\n    defaultValue\\n    cookieVariable\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DisplayFieldDef on CustomDisplayDef {\\n  ...FieldDef\\n  displaySettings: settings {\\n    html\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":77,"time":104.44},"total":{"count":77,"time":104.44}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 28273,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 7659,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.851Z",
    time: 1503.6420000251383,
    timings: {
      blocked: 0.9039998455941677,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.222,
      wait: 1498.8769999444187,
      receive: 3.6390002351254225,
      _blocked_queueing: 0.6829998455941677,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1484",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1484,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"userProperties","variables":{"id":"1059"},"query":"query userProperties($id: ID!) {\\n  labelDefs(labelType: people) {\\n    ...userProfileLabelsFragment\\n    __typename\\n  }\\n  user(id: $id) {\\n    id\\n    name\\n    display_name\\n    title_prefix\\n    avatarUrn\\n    is_disabled\\n    is_agent\\n    is_confirmed\\n    disable_autoresponses\\n    emails\\n    primary_email\\n    labels {\\n      ...userProfileLabelsFragment\\n      __typename\\n    }\\n    billingChargesInfo {\\n      totalAmount\\n      totalAmountCount\\n      totalTime\\n      totalTimeCount\\n      __typename\\n    }\\n    billingCharges(first: 50) {\\n      edges {\\n        charge {\\n          id\\n          agent {\\n            ...AgentInfoProps\\n            __typename\\n          }\\n          date_created\\n          charge_time\\n          amount\\n          ticket {\\n            id\\n            subject\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment userProfileLabelsFragment on LabelDef {\\n  id\\n  label\\n  color {\\n    ... on StandardColor {\\n      name\\n      __typename\\n    }\\n    ... on HexColor {\\n      hex\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment AgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":16,"time":19.37},"other":{"count":1,"time":2.89},"total":{"count":17,"time":22.26}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 1348,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1086,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.864Z",
    time: 670.6700001377612,
    timings: {
      blocked: 0.8470001513510943,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.15700000000000003,
      wait: 667.561000023216,
      receive: 2.104999963194132,
      _blocked_queueing: 0.6620001513510942,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/sys/services/broadcaster/93c1e911-9953-41de-af13-2dde59c008e9/join?a=vSDqkI3RQYkDErzK8v7HK5AwguhFrg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value:
            "/sys/services/broadcaster/93c1e911-9953-41de-af13-2dde59c008e9/join?a=vSDqkI3RQYkDErzK8v7HK5AwguhFrg",
        },
        {
          name: "content-length",
          value: "201",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [
        {
          name: "a",
          value: "vSDqkI3RQYkDErzK8v7HK5AwguhFrg",
        },
      ],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 201,
      postData: {
        mimeType: "application/json",
        text: '{"channels":["eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZXNrcHJvIiwic3ViIjoiMSIsImNoYW5uZWxJZCI6InZvaWNlLXF1ZXVlIiwiZXhwIjoxNjI0NjEwNzgzLjIwMTIzOH0.t8S2s3ePCRWU6-jmnTgb2PwHmj8W8-9nZJosbEAqXVQ"]}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 36,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 461,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.175Z",
    time: 587.8380001522601,
    timings: {
      blocked: 2.3920000409036875,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.403,
      wait: 582.1060000993311,
      receive: 2.937000012025237,
      _blocked_queueing: 1.0450000409036875,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "2886",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 2886,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"orgProfile","variables":{"orgId":"50"},"query":"query orgProfile($orgId: ID!) {\\n  org(id: $orgId) {\\n    ...orgProfileAppFragment\\n    __typename\\n  }\\n}\\n\\nfragment orgProfileAppFragment on Organization {\\n  id\\n  name\\n  summary\\n  date_created\\n  avatarUrn\\n  emailDomains\\n  contactRecords {\\n    ...orgAndUserProfileContactInfo\\n    __typename\\n  }\\n  phoneNumbers {\\n    ...orgUserPhoneNumberFragment\\n    __typename\\n  }\\n  tickets(perPage: 100) {\\n    tickets {\\n      id\\n      urgency\\n      __typename\\n    }\\n    __typename\\n  }\\n  billingChargesInfo {\\n    totalAmount\\n    totalAmountCount\\n    totalTime\\n    totalTimeCount\\n    __typename\\n  }\\n  billingCharges(first: 50) {\\n    edges {\\n      charge {\\n        id\\n        agent {\\n          ...AgentInfoProps\\n          __typename\\n        }\\n        date_created\\n        charge_time\\n        amount\\n        ticket {\\n          id\\n          subject\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  labels {\\n    id\\n    label\\n    color {\\n      ... on StandardColor {\\n        name\\n        __typename\\n      }\\n      ... on HexColor {\\n        hex\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  parent {\\n    ...orgOrganizationFragment\\n    __typename\\n  }\\n  children {\\n    ...orgOrganizationFragment\\n    __typename\\n  }\\n  usergroups {\\n    id\\n    title\\n    __typename\\n  }\\n  members(first: 5) {\\n    totalCount\\n    edges {\\n      id\\n      display_name\\n      avatarUrn\\n      orgMember {\\n        id\\n        position\\n        isManager\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment orgUserPhoneNumberFragment on PhoneNumber {\\n  id\\n  number\\n  ext\\n  label\\n  guessed_type\\n  date_created\\n  region\\n  __typename\\n}\\n\\nfragment orgOrganizationFragment on Organization {\\n  id\\n  name\\n  avatarUrn\\n  parent {\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment orgAndUserProfileContactInfo on UserProfileDataContact {\\n  ... on UserProfileContactSocialRecord {\\n    id\\n    socialType\\n    username\\n    profileUrl\\n    comment\\n    __typename\\n  }\\n  ... on UserProfileMessengerRecord {\\n    id\\n    messengerType\\n    username\\n    comment\\n    __typename\\n  }\\n  ... on UserProfileLinkRecord {\\n    id\\n    url\\n    comment\\n    __typename\\n  }\\n  ... on UserProfileAddressRecord {\\n    id\\n    address\\n    city\\n    state\\n    zip\\n    country\\n    comment\\n    __typename\\n  }\\n  ... on UserProfilePhoneRecord {\\n    id\\n    number\\n    comment\\n    type\\n    code\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment AgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":25,"time":27.88},"total":{"count":25,"time":27.88}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 1895,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1384,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:23.862Z",
    time: 900.690000038594,
    timings: {
      blocked: 0.9930000119358301,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.259,
      wait: 896.6670001144856,
      receive: 2.770999912172556,
      _blocked_queueing: 0.7660000119358301,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "memory",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/51AAAAAAAAAAAAAAA0/venom_001.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "date",
          value: "Fri, 25 Jun 2021 06:58:11 GMT",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "etag",
          value: 'W/"68e033900d06d5bb512e8bddaeb17841"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="venom_001.jpg"',
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="venom_001.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "content-length",
          value: "38287",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 38287,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.769Z",
    time: 0.1810002140700817,
    timings: {
      blocked: -1,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.15700003132224083,
      receive: 0.02400018274784088,
      _blocked_queueing: -1,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/59AAAAAAAAAAAAAAA0/150-5.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 06:58:11 GMT",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="150-5.jpg"',
        },
        {
          name: "content-length",
          value: "4533",
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="150-5.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "etag",
          value: 'W/"ffbc964a3dde26d43c1370bf087865c8"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 4533,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.804Z",
    time: 2.7110001537948847,
    timings: {
      blocked: 1.0430001314133406,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 1.0769999459981918,
      receive: 0.5910000763833523,
      _blocked_queueing: 0.9040001314133406,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/73AAAAAAAAAAAAAAA0/steve_irwin.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 06:58:11 GMT",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="steve_irwin.jpg"',
        },
        {
          name: "content-length",
          value: "4401",
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="steve_irwin.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "etag",
          value: 'W/"f6c9b657a1e751d76a49011c9423f8ab"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 4401,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.806Z",
    time: 2.202000003308058,
    timings: {
      blocked: 1.3420001940578223,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.3720000514984131,
      receive: 0.48799975775182247,
      _blocked_queueing: 1.2180001940578222,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1197",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1197,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"GetAllDismissedNotifications","variables":{},"query":"query GetAllDismissedNotifications($after: String) {\\n  myNotifications(first: 100, filter: {isDismissed: true}, after: $after) {\\n    totalDismissedCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    edges {\\n      ...notificationEdgeFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment notificationResponseFragment on TicketNotification {\\n  id\\n  personId\\n  isDismissed\\n  dateCreated\\n  title\\n  body\\n  ticket {\\n    id\\n    subject\\n    urgency\\n    date_last_agent_reply\\n    date_last_user_reply\\n    status {\\n      id\\n      status_type\\n      title\\n      __typename\\n    }\\n    person {\\n      id\\n      avatarUrn\\n      name\\n      emails\\n      __typename\\n    }\\n    agent {\\n      id\\n      avatarUrn\\n      __typename\\n    }\\n    department {\\n      id\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment notificationEdgeFragment on PagedNotificationsEdge {\\n  notification {\\n    __typename\\n    ... on TicketNotification {\\n      ...notificationResponseFragment\\n      __typename\\n    }\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":8,"time":12.75},"total":{"count":8,"time":12.75}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 209,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 679,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.327Z",
    time: 646.7890001367778,
    timings: {
      blocked: 1.0949999606758356,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.20900000000000002,
      wait: 642.3289998934865,
      receive: 3.156000282615423,
      _blocked_queueing: 0.8509999606758356,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "627",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 627,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFilterCount","variables":{"filterId":"4","groupBy":[]},"query":"query getTicketFilterCount($filterId: ID!, $groupBy: [TicketFieldInput!]) {\\n  myFilter(id: $filterId) {\\n    id\\n    counts(groupBy: $groupBy) {\\n      ...ticketFilterListCountFragment\\n      subCounts {\\n        ...ticketFilterListCountFragment\\n        subCounts {\\n          ...ticketFilterListCountFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketFilterListCountFragment on CountBadge {\\n  type\\n  value\\n  title\\n  count\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:24 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":18.68},"total":{"count":11,"time":18.68}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 185,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 641,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.295Z",
    time: 882.3400000110269,
    timings: {
      blocked: 1.0780001021325587,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.23399999999999999,
      wait: 874.2719999209494,
      receive: 6.755999987944961,
      _blocked_queueing: 0.8390001021325588,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "627",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 627,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFilterCount","variables":{"filterId":"8","groupBy":[]},"query":"query getTicketFilterCount($filterId: ID!, $groupBy: [TicketFieldInput!]) {\\n  myFilter(id: $filterId) {\\n    id\\n    counts(groupBy: $groupBy) {\\n      ...ticketFilterListCountFragment\\n      subCounts {\\n        ...ticketFilterListCountFragment\\n        subCounts {\\n          ...ticketFilterListCountFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketFilterListCountFragment on CountBadge {\\n  type\\n  value\\n  title\\n  count\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":16.69},"total":{"count":11,"time":16.69}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 185,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 641,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.335Z",
    time: 843.1020001880825,
    timings: {
      blocked: 1.1940001987665891,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.17700000000000002,
      wait: 835.1239999717772,
      receive: 6.607000017538667,
      _blocked_queueing: 0.9740001987665892,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "627",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 627,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFilterCount","variables":{"filterId":"5","groupBy":[]},"query":"query getTicketFilterCount($filterId: ID!, $groupBy: [TicketFieldInput!]) {\\n  myFilter(id: $filterId) {\\n    id\\n    counts(groupBy: $groupBy) {\\n      ...ticketFilterListCountFragment\\n      subCounts {\\n        ...ticketFilterListCountFragment\\n        subCounts {\\n          ...ticketFilterListCountFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketFilterListCountFragment on CountBadge {\\n  type\\n  value\\n  title\\n  count\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":15.91},"total":{"count":11,"time":15.91}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 185,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 641,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.331Z",
    time: 847.1010001376271,
    timings: {
      blocked: 1.1700001574754715,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.17200000000000001,
      wait: 839.283000028789,
      receive: 6.47599995136261,
      _blocked_queueing: 0.9380001574754715,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "289",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 289,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getDefaultSlas","variables":{},"query":"query getDefaultSlas {\\n  slas {\\n    ...defaultSla\\n    __typename\\n  }\\n}\\n\\nfragment defaultSla on Sla {\\n  id\\n  title\\n  sla_type\\n  apply_type\\n  warn_time\\n  warn_time_unit\\n  fail_time\\n  fail_time_unit\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":8,"time":19.6},"total":{"count":8,"time":19.6}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 527,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 692,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.497Z",
    time: 680.6320000905544,
    timings: {
      blocked: 1.0140001446008682,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.14599999999999996,
      wait: 673.112999954164,
      receive: 6.35899999178946,
      _blocked_queueing: 0.8140001446008682,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "627",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 627,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFilterCount","variables":{"filterId":"2","groupBy":[]},"query":"query getTicketFilterCount($filterId: ID!, $groupBy: [TicketFieldInput!]) {\\n  myFilter(id: $filterId) {\\n    id\\n    counts(groupBy: $groupBy) {\\n      ...ticketFilterListCountFragment\\n      subCounts {\\n        ...ticketFilterListCountFragment\\n        subCounts {\\n          ...ticketFilterListCountFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketFilterListCountFragment on CountBadge {\\n  type\\n  value\\n  title\\n  count\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":20.93},"total":{"count":11,"time":20.93}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 184,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 639,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.333Z",
    time: 845.3919999301434,
    timings: {
      blocked: 0.9779999325722456,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.16699999999999998,
      wait: 837.9850000458956,
      receive: 6.261999951675534,
      _blocked_queueing: 0.7249999325722456,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "580",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 580,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"builtInSettings","variables":{},"query":"query builtInSettings {\\n  ticketCategorySettings {\\n    defaultValue {\\n      id\\n      __typename\\n    }\\n    agentRequired\\n    __typename\\n  }\\n  ticketWorkflowSettings {\\n    defaultValue {\\n      id\\n      __typename\\n    }\\n    agentRequired\\n    __typename\\n  }\\n  ticketProductSettings {\\n    defaultValue {\\n      id\\n      __typename\\n    }\\n    agentRequired\\n    __typename\\n  }\\n  ticketPrioritySettings {\\n    defaultValue {\\n      id\\n      __typename\\n    }\\n    agentRequired\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":23.41},"total":{"count":11,"time":23.41}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 436,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 655,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.510Z",
    time: 668.7320000492036,
    timings: {
      blocked: 1.1259998561143876,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.198,
      wait: 661.2460000715405,
      receive: 6.162000121548772,
      _blocked_queueing: 0.9289998561143875,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "416",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 416,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getLanguagesForTranslation","variables":{},"query":"query getLanguagesForTranslation {\\n  getLanguagesForTranslation {\\n    ... on TranslateLanguagesResult {\\n      ...TranslateLanguagesFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment TranslateLanguagesFragment on TranslateLanguagesResult {\\n  languages {\\n    name\\n    language_code\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":6,"time":22.29},"total":{"count":6,"time":22.29}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 71,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 586,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.513Z",
    time: 665.1159999892116,
    timings: {
      blocked: 1.1310000813305379,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.615,
      wait: 657.326999993965,
      receive: 6.042999913915992,
      _blocked_queueing: 0.9280000813305378,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "2454",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 2454,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"ticketLayouts","variables":{},"query":"query ticketLayouts {\\n  ticketLayouts {\\n    id\\n    department {\\n      id\\n      title\\n      __typename\\n    }\\n    agentFields {\\n      field_id\\n      field_type\\n      options {\\n        criteria {\\n          __typename\\n          op\\n          rules {\\n            __typename\\n            ...ruleBuilderFields\\n            ... on TriggerCriteriaGroup {\\n              op\\n              rules {\\n                ...ruleBuilderFields\\n                __typename\\n              }\\n              __typename\\n            }\\n          }\\n        }\\n        on_newticket\\n        on_editticket\\n        on_viewticket\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ruleBuilderFields on TriggerCriteriaRule {\\n  __typename\\n  ... on TriggerCriteriaGroup {\\n    op\\n    __typename\\n  }\\n  ... on TriggerCriteriaCheckCustomFieldString {\\n    fieldId\\n    stringOp: op\\n    customFieldString\\n    __typename\\n  }\\n  ... on TriggerCriteriaCheckCustomFieldChoice {\\n    fieldId\\n    choiceOp: op\\n    choiceId\\n    __typename\\n  }\\n  ... on TriggerCriteriaCheckCustomFieldDate {\\n    fieldId\\n    dateOp: op\\n    date1\\n    date1_relative\\n    date1_relative_type\\n    date1_relative_tense\\n    date2\\n    date2_relative\\n    date2_relative_type\\n    date2_relative_tense\\n    __typename\\n  }\\n  ... on TriggerCriteriaCheckCustomFieldDateTime {\\n    fieldId\\n    dateOp: op\\n    date1\\n    date1_relative\\n    date1_relative_type\\n    date1_relative_tense\\n    date2\\n    date2_relative\\n    date2_relative_type\\n    date2_relative_tense\\n    __typename\\n  }\\n  ... on TriggerCriteriaCheckCustomFieldToggle {\\n    fieldId\\n    toggleOp: op\\n    __typename\\n  }\\n  ... on TriggerCriteriaCheckCustomFieldCurrency {\\n    fieldId\\n    currencyOp: op\\n    amount\\n    __typename\\n  }\\n  ... on TriggerCriteriaCheckCustomFieldFile {\\n    fieldId\\n    fileOp: op\\n    __typename\\n  }\\n  ... on TriggerCriteriaCheckDepartment {\\n    altOp: op\\n    department_ids\\n    __typename\\n  }\\n  ... on TriggerCriteriaCheckProduct {\\n    altOp: op\\n    product_ids\\n    __typename\\n  }\\n  ... on TriggerCriteriaCheckCategory {\\n    altOp: op\\n    category_ids\\n    __typename\\n  }\\n  ... on TriggerCriteriaCheckPriority {\\n    altOp: op\\n    priority_ids\\n    __typename\\n  }\\n  ... on TriggerCriteriaCheckWorkflow {\\n    altOp: op\\n    workflow_ids\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":12,"time":22.29},"total":{"count":12,"time":22.29}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 7823,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 972,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.509Z",
    time: 669.6940001565963,
    timings: {
      blocked: 1.3840000233203174,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.154,
      wait: 662.2329999689459,
      receive: 5.923000164330006,
      _blocked_queueing: 1.1650000233203173,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "699",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 699,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketApprovalTemplates","variables":{},"query":"query getTicketApprovalTemplates {\\n  ticketApprovalTemplates {\\n    id\\n    name\\n    can_choose_approvers\\n    required_approvals\\n    required_rejections\\n    description\\n    created_at\\n    selected_approvers {\\n      people {\\n        id\\n        name\\n        avatarUrn\\n        __typename\\n      }\\n      __typename\\n    }\\n    approver_selection_criteria {\\n      minNumberOfApprovers\\n      canSelectTicketUser\\n      canSelectOrganizationManagers\\n      canSelectFromAllAgents\\n      selectFromPeople {\\n        id\\n        display_name\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":13,"time":26.65},"total":{"count":13,"time":26.65}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 7245,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1885,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.498Z",
    time: 680.3750002291054,
    timings: {
      blocked: 0.8620001818090677,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.20600000000000002,
      wait: 673.4889999839961,
      receive: 5.818000063300133,
      _blocked_queueing: 0.6660001818090677,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1525",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1525,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"userPropertiesApp","variables":{"id":"1059"},"query":"query userPropertiesApp($id: ID!) {\\n  user(id: $id) {\\n    id\\n    is_agent\\n    is_disabled\\n    date_disabled\\n    is_confirmed\\n    disable_autoresponses\\n    display_name\\n    summary\\n    primary_email\\n    orgMember {\\n      id\\n      org {\\n        id\\n        name\\n        memberCount\\n        ticketCount\\n        avatarUrn\\n        summary\\n        __typename\\n      }\\n      position\\n      isManager\\n      __typename\\n    }\\n    emails\\n    phoneNumbers {\\n      ...orgUserPhoneNumberFragment\\n      __typename\\n    }\\n    contactRecords {\\n      ...orgAndUserProfileContactInfo\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment orgUserPhoneNumberFragment on PhoneNumber {\\n  id\\n  number\\n  ext\\n  label\\n  guessed_type\\n  date_created\\n  region\\n  __typename\\n}\\n\\nfragment orgAndUserProfileContactInfo on UserProfileDataContact {\\n  ... on UserProfileContactSocialRecord {\\n    id\\n    socialType\\n    username\\n    profileUrl\\n    comment\\n    __typename\\n  }\\n  ... on UserProfileMessengerRecord {\\n    id\\n    messengerType\\n    username\\n    comment\\n    __typename\\n  }\\n  ... on UserProfileLinkRecord {\\n    id\\n    url\\n    comment\\n    __typename\\n  }\\n  ... on UserProfileAddressRecord {\\n    id\\n    address\\n    city\\n    state\\n    zip\\n    country\\n    comment\\n    __typename\\n  }\\n  ... on UserProfilePhoneRecord {\\n    id\\n    number\\n    comment\\n    type\\n    code\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":17,"time":26.37},"total":{"count":17,"time":26.37}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 1061,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1134,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.571Z",
    time: 800.5559998564422,
    timings: {
      blocked: 1.2939999018013477,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.253,
      wait: 796.7670001124144,
      receive: 2.2419998422265053,
      _blocked_queueing: 0.9349999018013477,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "351",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 351,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketLinkedProblems","variables":{"id":"2"},"query":"query getTicketLinkedProblems($id: ID!) {\\n  ticket(id: $id) {\\n    id\\n    problems {\\n      ...ProblemProps\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ProblemProps on TicketProblem {\\n  id\\n  title\\n  created\\n  is_open\\n  ticketsCount\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":15,"time":21.36},"total":{"count":15,"time":21.36}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 198,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 660,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.504Z",
    time: 866.8239999096841,
    timings: {
      blocked: 1.1089998528957368,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.19300000000000003,
      wait: 863.3659999380857,
      receive: 2.15600011870265,
      _blocked_queueing: 0.8979998528957367,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "262",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 262,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getFileClientInfo","variables":{},"query":"query getFileClientInfo {\\n  filesClientInfo {\\n    uploadSettings {\\n      maximumSize\\n      allowedFileExtensions\\n      disallowedFileExtensions\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":23.37},"total":{"count":11,"time":23.37}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 196,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 648,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.570Z",
    time: 800.8090001530945,
    timings: {
      blocked: 1.0880000488311052,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.201,
      wait: 796.8790000178218,
      receive: 2.641000086441636,
      _blocked_queueing: 0.8320000488311052,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "356",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 356,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"passwordPolicy","variables":{},"query":"query passwordPolicy {\\n  passwordPolicy {\\n    deskproUserAuth {\\n      max_age\\n      is_custom\\n      min_length\\n      forbid_reuse\\n      require_num_number\\n      require_num_symbol\\n      require_num_uppercase\\n      require_num_lowercase\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":6,"time":15.26},"total":{"count":6,"time":15.26}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 302,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 682,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.571Z",
    time: 799.2579999845475,
    timings: {
      blocked: 1.2679999343007804,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.255,
      wait: 795.2660001093448,
      receive: 2.4689999409019947,
      _blocked_queueing: 1.0309999343007803,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "258",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 258,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getVoiceNumbers","variables":{},"query":"query getVoiceNumbers {\\n  voiceNumbers {\\n    id\\n    number\\n    country_code\\n    nickname\\n    outbound_calls_enabled\\n    account {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":12,"time":17.35},"total":{"count":12,"time":17.35}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 207,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 669,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.514Z",
    time: 856.6950000822544,
    timings: {
      blocked: 1.137000090122223,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.15799999999999997,
      wait: 853.0530000488758,
      receive: 2.346999943256378,
      _blocked_queueing: 0.8680000901222229,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "7360",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 7360,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"chats","variables":{"id":"2"},"query":"query chats($id: ID!, $after: String) {\\n  chats(after: $after, first: 100, filter: {ticketIds: [$id]}) {\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n      __typename\\n    }\\n    edges {\\n      id\\n      ip_address\\n      subject\\n      status\\n      person {\\n        ...BasicUserProps\\n        __typename\\n      }\\n      agent {\\n        ...AgentInfoProps\\n        __typename\\n      }\\n      participants {\\n        ...AgentInfoProps\\n        is_agent\\n        __typename\\n      }\\n      date_created\\n      date_ended\\n      visitor_id\\n      department {\\n        id\\n        title\\n        avatarUrn\\n        __typename\\n      }\\n      labels {\\n        ...LabelInfoProps\\n        __typename\\n      }\\n      fields {\\n        ...CustomFields\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  chatFieldDefs {\\n    ...FieldDefs\\n    __typename\\n  }\\n}\\n\\nfragment BasicUserProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  orgMember {\\n    id\\n    position\\n    isManager\\n    org {\\n      id\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment AgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment LabelInfoProps on LabelDef {\\n  color {\\n    ... on StandardColor {\\n      name\\n      __typename\\n    }\\n    ... on HexColor {\\n      hex\\n      __typename\\n    }\\n    __typename\\n  }\\n  id\\n  label\\n  __typename\\n}\\n\\nfragment CustomFields on CustomValueType {\\n  ... on CustomChoiceValue {\\n    id\\n    def {\\n      ...ChoiceFieldDef\\n      __typename\\n    }\\n    selected {\\n      id\\n      title\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomDateValue {\\n    id\\n    def {\\n      ... on CustomDateDef {\\n        ...DateFieldDef\\n        __typename\\n      }\\n      ... on CustomDateTimeDef {\\n        ...DateTimeFieldDef\\n        __typename\\n      }\\n      __typename\\n    }\\n    date\\n    __typename\\n  }\\n  ... on CustomInputValue {\\n    id\\n    value\\n    def {\\n      ... on CustomCurrencyDef {\\n        ...CurrencyFieldDef\\n        __typename\\n      }\\n      ... on CustomTextareaDef {\\n        ...TextareaFieldDef\\n        __typename\\n      }\\n      ... on CustomTextDef {\\n        ...TextFieldDef\\n        __typename\\n      }\\n      ... on CustomUrlDef {\\n        ...UrlFieldDef\\n        __typename\\n      }\\n      ... on CustomNumberDef {\\n        ...NumberFieldDef\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomToggleValue {\\n    id\\n    def {\\n      ...ToggleFieldDef\\n      __typename\\n    }\\n    isChecked\\n    __typename\\n  }\\n  ... on CustomFileValue {\\n    id\\n    def {\\n      ...FileFieldDef\\n      __typename\\n    }\\n    files {\\n      id\\n      filesize\\n      filename\\n      content_type\\n      file_url\\n      download_url\\n      date_created\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomJavascriptValue {\\n    id\\n    value\\n    def {\\n      ...JavascriptFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomHiddenValue {\\n    id\\n    def {\\n      ...HiddenFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomDisplayValue {\\n    id\\n    def {\\n      ...DisplayFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ChoiceFieldDef on CustomChoiceDef {\\n  ...FieldDef\\n  options {\\n    id\\n    parent {\\n      id\\n      title\\n      __typename\\n    }\\n    children {\\n      id\\n      title\\n      __typename\\n    }\\n    title\\n    depth\\n    display_order\\n    effective_display_order\\n    __typename\\n  }\\n  choiceSettings: settings {\\n    style\\n    defaultOptionId\\n    userIsRequired\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment FieldDef on CustomFieldDef {\\n  __typename\\n  id\\n  title\\n  aliases\\n  description\\n  is_enabled\\n  display_order\\n  is_user_enabled\\n  is_agent_field\\n  defer_agent_validation\\n}\\n\\nfragment DateFieldDef on CustomDateDef {\\n  ...FieldDef\\n  dateSettings: settings {\\n    ...CustomDateSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CustomDateSettings on CustomDateSettings {\\n  defaultValue\\n  validWeekDays\\n  calendarType\\n  requireDateRange\\n  requireDateRangeDays\\n  userIsRequired\\n  agentIsRequired\\n  __typename\\n}\\n\\nfragment DateTimeFieldDef on CustomDateTimeDef {\\n  ...FieldDef\\n  dateSettings: settings {\\n    ...CustomDateSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CurrencyFieldDef on CustomCurrencyDef {\\n  ...FieldDef\\n  currencySettings: settings {\\n    currency {\\n      symbol\\n      decimal_places\\n      __typename\\n    }\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TextareaFieldDef on CustomTextareaDef {\\n  ...FieldDef\\n  textSettings: settings {\\n    ...CustomTextSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CustomTextSettings on CustomTextSettings {\\n  defaultValue\\n  parseLinks\\n  userValidation {\\n    minLength\\n    maxLength\\n    regexPattern\\n    regexRequired\\n    __typename\\n  }\\n  agentValidation {\\n    minLength\\n    maxLength\\n    regexPattern\\n    regexRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TextFieldDef on CustomTextDef {\\n  ...FieldDef\\n  textSettings: settings {\\n    ...CustomTextSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment UrlFieldDef on CustomUrlDef {\\n  ...FieldDef\\n  urlSettings: settings {\\n    allowNetworkLinks\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment NumberFieldDef on CustomNumberDef {\\n  ...FieldDef\\n  numberSettings: settings {\\n    defaultValue\\n    max\\n    min\\n    isSelect\\n    userIsRequired\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ToggleFieldDef on CustomToggleDef {\\n  ...FieldDef\\n  toggleSettings: settings {\\n    defaultState\\n    checkboxLabel\\n    uncheckedDisplayLabel\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment FileFieldDef on CustomFileDef {\\n  ...FieldDef\\n  fileSettings: settings {\\n    allowMultiple\\n    agentValidation {\\n      onlyAllowExt\\n      onlyRejectExt\\n      isRequired\\n      maxFileSize\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment JavascriptFieldDef on CustomJavascriptDef {\\n  ...FieldDef\\n  javascriptSettings: settings {\\n    code\\n    defaultValue\\n    parseLinks\\n    agentValidation {\\n      minLength\\n      maxLength\\n      regexPattern\\n      regexRequired\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment HiddenFieldDef on CustomHiddenDef {\\n  ...FieldDef\\n  hiddenSettings: settings {\\n    defaultValue\\n    cookieVariable\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DisplayFieldDef on CustomDisplayDef {\\n  ...FieldDef\\n  displaySettings: settings {\\n    html\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment FieldDefs on CustomFieldDef {\\n  id\\n  ...ChoiceFieldDef\\n  ...DisplayFieldDef\\n  ...HiddenFieldDef\\n  ...JavascriptFieldDef\\n  ...DateFieldDef\\n  ...DateTimeFieldDef\\n  ...FileFieldDef\\n  ...TextFieldDef\\n  ...TextareaFieldDef\\n  ...UrlFieldDef\\n  ...CurrencyFieldDef\\n  ...ToggleFieldDef\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":14,"time":22.88},"total":{"count":14,"time":22.88}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 2852,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1199,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.504Z",
    time: 867.2469998709857,
    timings: {
      blocked: 1.16099996624887,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.33799999999999997,
      wait: 863.4390000180006,
      receive: 2.3089998867362738,
      _blocked_queueing: 0.7599999662488699,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "627",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 627,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFilterCount","variables":{"filterId":"3","groupBy":[]},"query":"query getTicketFilterCount($filterId: ID!, $groupBy: [TicketFieldInput!]) {\\n  myFilter(id: $filterId) {\\n    id\\n    counts(groupBy: $groupBy) {\\n      ...ticketFilterListCountFragment\\n      subCounts {\\n        ...ticketFilterListCountFragment\\n        subCounts {\\n          ...ticketFilterListCountFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketFilterListCountFragment on CountBadge {\\n  type\\n  value\\n  title\\n  count\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":19.52},"total":{"count":11,"time":19.52}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 185,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 640,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.525Z",
    time: 1040.957999881357,
    timings: {
      blocked: 1.243000066101551,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.20800000000000002,
      wait: 1038.5139999374746,
      receive: 0.9929998777806759,
      _blocked_queueing: 0.9260000661015511,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "251",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 251,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"activeMessengerChats","variables":{"ticketId":"2"},"query":"query activeMessengerChats($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    chats {\\n      id\\n      date_ended\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":14,"time":18.29},"total":{"count":14,"time":18.29}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 63,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 580,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.497Z",
    time: 1068.9700001385063,
    timings: {
      blocked: 1.1880001009553671,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.17500000000000004,
      wait: 1066.0520000713766,
      receive: 1.554999966174364,
      _blocked_queueing: 0.9000001009553671,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "565",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 565,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getAddedSlas","variables":{"ticketId":"2"},"query":"query getAddedSlas($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    slas {\\n      ...addedSla\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment defaultSla on Sla {\\n  id\\n  title\\n  sla_type\\n  apply_type\\n  warn_time\\n  warn_time_unit\\n  fail_time\\n  fail_time_unit\\n  __typename\\n}\\n\\nfragment addedSla on TicketSla {\\n  id\\n  sla_status\\n  is_completed\\n  fail_date\\n  warn_date\\n  completed_time_taken\\n  sla {\\n    ...defaultSla\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":15,"time":20.27},"total":{"count":15,"time":20.27}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 404,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 745,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.499Z",
    time: 1066.5579999331385,
    timings: {
      blocked: 0.9369999554157257,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.168,
      wait: 1064.0419999438823,
      receive: 1.411000033840537,
      _blocked_queueing: 0.7279999554157257,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "228",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 228,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"ticketBillingCount","variables":{"id":"2"},"query":"query ticketBillingCount($id: ID!) {\\n  ticket(id: $id) {\\n    id\\n    billingCharges {\\n      totalCount\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":15,"time":20.65},"total":{"count":15,"time":20.65}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 120,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 612,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.505Z",
    time: 1060.4809999931604,
    timings: {
      blocked: 1.2470000409036874,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.14799999999999996,
      wait: 1057.8160000607372,
      receive: 1.2699998915195465,
      _blocked_queueing: 1.0450000409036875,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "387",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 387,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getAllOrgs","variables":{"searchName":""},"query":"query getAllOrgs($searchName: String) {\\n  orgs(filter: {name: $searchName}) {\\n    orgs {\\n      ...orgOrganizationFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment orgOrganizationFragment on Organization {\\n  id\\n  name\\n  avatarUrn\\n  parent {\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":8,"time":15.19},"total":{"count":8,"time":15.19}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 1651,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 959,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.842Z",
    time: 724.0760000422597,
    timings: {
      blocked: 1.26499988861382,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.14100000000000001,
      wait: 721.5010000998676,
      receive: 1.1690000537782907,
      _blocked_queueing: 1.02499988861382,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1051",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1051,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getBasicTicketInfo","variables":{"ticketId":"2"},"query":"query getBasicTicketInfo($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    subject\\n    agent_team {\\n      id\\n      __typename\\n    }\\n    agent {\\n      id\\n      __typename\\n    }\\n    person {\\n      id\\n      primary_email\\n      display_name\\n      __typename\\n    }\\n    status {\\n      id\\n      __typename\\n    }\\n    ccs {\\n      id\\n      primary_email\\n      display_name\\n      avatarUrn\\n      __typename\\n    }\\n    lock {\\n      ...TicketLockProps\\n      __typename\\n    }\\n    language {\\n      id\\n      title\\n      locale\\n      __typename\\n    }\\n    forwardEmailAccountAddress\\n    __typename\\n  }\\n}\\n\\nfragment TicketLockProps on TicketLock {\\n  id\\n  agent {\\n    ...AgentInfoProps\\n    __typename\\n  }\\n  date\\n  __typename\\n}\\n\\nfragment AgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":20,"time":24.88},"total":{"count":20,"time":24.88}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 497,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 809,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.513Z",
    time: 1239.5820000674576,
    timings: {
      blocked: 1.1680001835376024,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.15399999999999997,
      wait: 1236.6169999461622,
      receive: 1.6429999377578497,
      _blocked_queueing: 0.9720001835376024,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "7102",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 7102,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getOrgFields","variables":{"orgId":"50"},"query":"query getOrgFields($orgId: ID!) {\\n  org(id: $orgId) {\\n    id\\n    date_created\\n    contactRecords {\\n      ...orgAndUserProfileContactInfo\\n      __typename\\n    }\\n    usergroups {\\n      id\\n      __typename\\n    }\\n    fields {\\n      ...CustomFields\\n      __typename\\n    }\\n    __typename\\n  }\\n  organizationFieldDefs {\\n    ...FieldDefs\\n    __typename\\n  }\\n  perOrganizationFields {\\n    ...PerOrgField\\n    choices(orgId: $orgId) {\\n      id\\n      title\\n      display_order\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment orgAndUserProfileContactInfo on UserProfileDataContact {\\n  ... on UserProfileContactSocialRecord {\\n    id\\n    socialType\\n    username\\n    profileUrl\\n    comment\\n    __typename\\n  }\\n  ... on UserProfileMessengerRecord {\\n    id\\n    messengerType\\n    username\\n    comment\\n    __typename\\n  }\\n  ... on UserProfileLinkRecord {\\n    id\\n    url\\n    comment\\n    __typename\\n  }\\n  ... on UserProfileAddressRecord {\\n    id\\n    address\\n    city\\n    state\\n    zip\\n    country\\n    comment\\n    __typename\\n  }\\n  ... on UserProfilePhoneRecord {\\n    id\\n    number\\n    comment\\n    type\\n    code\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CustomFields on CustomValueType {\\n  ... on CustomChoiceValue {\\n    id\\n    def {\\n      ...ChoiceFieldDef\\n      __typename\\n    }\\n    selected {\\n      id\\n      title\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomDateValue {\\n    id\\n    def {\\n      ... on CustomDateDef {\\n        ...DateFieldDef\\n        __typename\\n      }\\n      ... on CustomDateTimeDef {\\n        ...DateTimeFieldDef\\n        __typename\\n      }\\n      __typename\\n    }\\n    date\\n    __typename\\n  }\\n  ... on CustomInputValue {\\n    id\\n    value\\n    def {\\n      ... on CustomCurrencyDef {\\n        ...CurrencyFieldDef\\n        __typename\\n      }\\n      ... on CustomTextareaDef {\\n        ...TextareaFieldDef\\n        __typename\\n      }\\n      ... on CustomTextDef {\\n        ...TextFieldDef\\n        __typename\\n      }\\n      ... on CustomUrlDef {\\n        ...UrlFieldDef\\n        __typename\\n      }\\n      ... on CustomNumberDef {\\n        ...NumberFieldDef\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomToggleValue {\\n    id\\n    def {\\n      ...ToggleFieldDef\\n      __typename\\n    }\\n    isChecked\\n    __typename\\n  }\\n  ... on CustomFileValue {\\n    id\\n    def {\\n      ...FileFieldDef\\n      __typename\\n    }\\n    files {\\n      id\\n      filesize\\n      filename\\n      content_type\\n      file_url\\n      download_url\\n      date_created\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomJavascriptValue {\\n    id\\n    value\\n    def {\\n      ...JavascriptFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomHiddenValue {\\n    id\\n    def {\\n      ...HiddenFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomDisplayValue {\\n    id\\n    def {\\n      ...DisplayFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ChoiceFieldDef on CustomChoiceDef {\\n  ...FieldDef\\n  options {\\n    id\\n    parent {\\n      id\\n      title\\n      __typename\\n    }\\n    children {\\n      id\\n      title\\n      __typename\\n    }\\n    title\\n    depth\\n    display_order\\n    effective_display_order\\n    __typename\\n  }\\n  choiceSettings: settings {\\n    style\\n    defaultOptionId\\n    userIsRequired\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment FieldDef on CustomFieldDef {\\n  __typename\\n  id\\n  title\\n  aliases\\n  description\\n  is_enabled\\n  display_order\\n  is_user_enabled\\n  is_agent_field\\n  defer_agent_validation\\n}\\n\\nfragment DateFieldDef on CustomDateDef {\\n  ...FieldDef\\n  dateSettings: settings {\\n    ...CustomDateSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CustomDateSettings on CustomDateSettings {\\n  defaultValue\\n  validWeekDays\\n  calendarType\\n  requireDateRange\\n  requireDateRangeDays\\n  userIsRequired\\n  agentIsRequired\\n  __typename\\n}\\n\\nfragment DateTimeFieldDef on CustomDateTimeDef {\\n  ...FieldDef\\n  dateSettings: settings {\\n    ...CustomDateSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CurrencyFieldDef on CustomCurrencyDef {\\n  ...FieldDef\\n  currencySettings: settings {\\n    currency {\\n      symbol\\n      decimal_places\\n      __typename\\n    }\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TextareaFieldDef on CustomTextareaDef {\\n  ...FieldDef\\n  textSettings: settings {\\n    ...CustomTextSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CustomTextSettings on CustomTextSettings {\\n  defaultValue\\n  parseLinks\\n  userValidation {\\n    minLength\\n    maxLength\\n    regexPattern\\n    regexRequired\\n    __typename\\n  }\\n  agentValidation {\\n    minLength\\n    maxLength\\n    regexPattern\\n    regexRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TextFieldDef on CustomTextDef {\\n  ...FieldDef\\n  textSettings: settings {\\n    ...CustomTextSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment UrlFieldDef on CustomUrlDef {\\n  ...FieldDef\\n  urlSettings: settings {\\n    allowNetworkLinks\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment NumberFieldDef on CustomNumberDef {\\n  ...FieldDef\\n  numberSettings: settings {\\n    defaultValue\\n    max\\n    min\\n    isSelect\\n    userIsRequired\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ToggleFieldDef on CustomToggleDef {\\n  ...FieldDef\\n  toggleSettings: settings {\\n    defaultState\\n    checkboxLabel\\n    uncheckedDisplayLabel\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment FileFieldDef on CustomFileDef {\\n  ...FieldDef\\n  fileSettings: settings {\\n    allowMultiple\\n    agentValidation {\\n      onlyAllowExt\\n      onlyRejectExt\\n      isRequired\\n      maxFileSize\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment JavascriptFieldDef on CustomJavascriptDef {\\n  ...FieldDef\\n  javascriptSettings: settings {\\n    code\\n    defaultValue\\n    parseLinks\\n    agentValidation {\\n      minLength\\n      maxLength\\n      regexPattern\\n      regexRequired\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment HiddenFieldDef on CustomHiddenDef {\\n  ...FieldDef\\n  hiddenSettings: settings {\\n    defaultValue\\n    cookieVariable\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DisplayFieldDef on CustomDisplayDef {\\n  ...FieldDef\\n  displaySettings: settings {\\n    html\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment FieldDefs on CustomFieldDef {\\n  id\\n  ...ChoiceFieldDef\\n  ...DisplayFieldDef\\n  ...HiddenFieldDef\\n  ...JavascriptFieldDef\\n  ...DateFieldDef\\n  ...DateTimeFieldDef\\n  ...FileFieldDef\\n  ...TextFieldDef\\n  ...TextareaFieldDef\\n  ...UrlFieldDef\\n  ...CurrencyFieldDef\\n  ...ToggleFieldDef\\n  __typename\\n}\\n\\nfragment PerOrgField on CustomPerOrganizationFieldType {\\n  id\\n  title\\n  description\\n  is_enabled\\n  style\\n  allow_edit\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":15,"time":20.61},"total":{"count":15,"time":20.61}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 12060,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 2249,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.841Z",
    time: 911.4019998814911,
    timings: {
      blocked: 1.144999826833606,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.177,
      wait: 908.4999998981208,
      receive: 1.5800001565366983,
      _blocked_queueing: 0.8639998268336058,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "916",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 916,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"outboundToUsers","variables":{"ticketId":"2"},"query":"query outboundToUsers($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    person {\\n      ...BasicUserProps\\n      phoneNumbers {\\n        id\\n        number\\n        ext\\n        region\\n        __typename\\n      }\\n      __typename\\n    }\\n    ccs {\\n      ...BasicUserProps\\n      phoneNumbers {\\n        id\\n        number\\n        ext\\n        region\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  voiceNumbers {\\n    id\\n    number\\n    country_code\\n    nickname\\n    outbound_calls_enabled\\n    __typename\\n  }\\n}\\n\\nfragment BasicUserProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  orgMember {\\n    id\\n    position\\n    isManager\\n    org {\\n      id\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":22,"time":24.33},"total":{"count":22,"time":24.33}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 735,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 902,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.515Z",
    time: 1237.6620001159608,
    timings: {
      blocked: 0.8679999718219042,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.139,
      wait: 1235.1470000701845,
      receive: 1.508000073954463,
      _blocked_queueing: 0.6689999718219042,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1084",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1084,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketLinkedTasks","variables":{"id":"2"},"query":"query getTicketLinkedTasks($id: ID!) {\\n  ticket(id: $id) {\\n    id\\n    tasks {\\n      ...TaskAndComments\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment TaskAndComments on Task {\\n  id\\n  title\\n  links {\\n    ... on TaskTicketLink {\\n      ticket {\\n        id\\n        subject\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  author {\\n    id\\n    display_name\\n    avatarUrn\\n    __typename\\n  }\\n  assigned {\\n    id\\n    display_name\\n    avatarUrn\\n    __typename\\n  }\\n  visibility\\n  comments {\\n    ...TaskCommentFragment\\n    __typename\\n  }\\n  assignedTeam {\\n    id\\n    name\\n    avatarUrn\\n    __typename\\n  }\\n  assignedDepartment {\\n    id\\n    title\\n    avatarUrn\\n    __typename\\n  }\\n  status\\n  date_due\\n  date_created\\n  date_completed\\n  is_completed\\n  __typename\\n}\\n\\nfragment TaskCommentFragment on TaskComment {\\n  id\\n  comment\\n  date_created\\n  author {\\n    id\\n    display_name\\n    avatarUrn\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":24,"time":32.97},"total":{"count":24,"time":32.97}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 2198,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1364,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.501Z",
    time: 1251.0450000409037,
    timings: {
      blocked: 1.0700000444352626,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.13899999999999998,
      wait: 1247.8659998970777,
      receive: 1.9700000993907452,
      _blocked_queueing: 0.8620000444352627,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "627",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 627,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFilterCount","variables":{"filterId":"6","groupBy":[]},"query":"query getTicketFilterCount($filterId: ID!, $groupBy: [TicketFieldInput!]) {\\n  myFilter(id: $filterId) {\\n    id\\n    counts(groupBy: $groupBy) {\\n      ...ticketFilterListCountFragment\\n      subCounts {\\n        ...ticketFilterListCountFragment\\n        subCounts {\\n          ...ticketFilterListCountFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketFilterListCountFragment on CountBadge {\\n  type\\n  value\\n  title\\n  count\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":11,"time":19.73},"total":{"count":11,"time":19.73}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 184,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 640,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.523Z",
    time: 1229.3640000279993,
    timings: {
      blocked: 1.0660001293718815,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.20400000000000001,
      wait: 1226.2870001090764,
      receive: 1.8069997895509005,
      _blocked_queueing: 0.8120001293718815,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "724",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 724,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getLinkedCommunity","variables":{"ticketId":"2"},"query":"query getLinkedCommunity($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    linkedCommunityTopics {\\n      ...getCommunityTopicLink\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment getCommunityTopic on CommunityTopic {\\n  id\\n  num_ratings\\n  author {\\n    name\\n    emails\\n    avatarUrn\\n    is_agent\\n    __typename\\n  }\\n  status\\n  forum {\\n    title\\n    iconUrn\\n    splashImageUrn\\n    __typename\\n  }\\n  title\\n  comments {\\n    totalCount\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment getCommunityTopicLink on CommunityTopicLink {\\n  id\\n  topic {\\n    ...getCommunityTopic\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":34,"time":40.27},"total":{"count":34,"time":40.27}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 2777,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1272,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.500Z",
    time: 1252.1770000457764,
    timings: {
      blocked: 1.0689999029785395,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.187,
      wait: 1249.1980000615417,
      receive: 1.723000081256032,
      _blocked_queueing: 0.8739999029785395,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "7108",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 7108,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFields","variables":{"ticketId":"2"},"query":"query getTicketFields($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    ref\\n    brand {\\n      ...BrandInfoProps\\n      __typename\\n    }\\n    department {\\n      id\\n      __typename\\n    }\\n    date_created\\n    language {\\n      id\\n      __typename\\n    }\\n    category {\\n      id\\n      __typename\\n    }\\n    priority {\\n      id\\n      __typename\\n    }\\n    product {\\n      id\\n      __typename\\n    }\\n    workflow {\\n      id\\n      __typename\\n    }\\n    fields {\\n      ...CustomFields\\n      __typename\\n    }\\n    organization {\\n      id\\n      __typename\\n    }\\n    person {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n  ticketDepartments {\\n    ...DepInfoProps\\n    __typename\\n  }\\n  languages {\\n    ...LangInfoProps\\n    __typename\\n  }\\n  ticketFieldDefs {\\n    ...FieldDefs\\n    __typename\\n  }\\n  organizationFieldDefs {\\n    ...FieldDefs\\n    __typename\\n  }\\n  userFieldDefs {\\n    ...FieldDefs\\n    __typename\\n  }\\n}\\n\\nfragment BrandInfoProps on Brand {\\n  id\\n  name\\n  iconUrl\\n  __typename\\n}\\n\\nfragment CustomFields on CustomValueType {\\n  ... on CustomChoiceValue {\\n    id\\n    def {\\n      ...ChoiceFieldDef\\n      __typename\\n    }\\n    selected {\\n      id\\n      title\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomDateValue {\\n    id\\n    def {\\n      ... on CustomDateDef {\\n        ...DateFieldDef\\n        __typename\\n      }\\n      ... on CustomDateTimeDef {\\n        ...DateTimeFieldDef\\n        __typename\\n      }\\n      __typename\\n    }\\n    date\\n    __typename\\n  }\\n  ... on CustomInputValue {\\n    id\\n    value\\n    def {\\n      ... on CustomCurrencyDef {\\n        ...CurrencyFieldDef\\n        __typename\\n      }\\n      ... on CustomTextareaDef {\\n        ...TextareaFieldDef\\n        __typename\\n      }\\n      ... on CustomTextDef {\\n        ...TextFieldDef\\n        __typename\\n      }\\n      ... on CustomUrlDef {\\n        ...UrlFieldDef\\n        __typename\\n      }\\n      ... on CustomNumberDef {\\n        ...NumberFieldDef\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomToggleValue {\\n    id\\n    def {\\n      ...ToggleFieldDef\\n      __typename\\n    }\\n    isChecked\\n    __typename\\n  }\\n  ... on CustomFileValue {\\n    id\\n    def {\\n      ...FileFieldDef\\n      __typename\\n    }\\n    files {\\n      id\\n      filesize\\n      filename\\n      content_type\\n      file_url\\n      download_url\\n      date_created\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomJavascriptValue {\\n    id\\n    value\\n    def {\\n      ...JavascriptFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomHiddenValue {\\n    id\\n    def {\\n      ...HiddenFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomDisplayValue {\\n    id\\n    def {\\n      ...DisplayFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ChoiceFieldDef on CustomChoiceDef {\\n  ...FieldDef\\n  options {\\n    id\\n    parent {\\n      id\\n      title\\n      __typename\\n    }\\n    children {\\n      id\\n      title\\n      __typename\\n    }\\n    title\\n    depth\\n    display_order\\n    effective_display_order\\n    __typename\\n  }\\n  choiceSettings: settings {\\n    style\\n    defaultOptionId\\n    userIsRequired\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment FieldDef on CustomFieldDef {\\n  __typename\\n  id\\n  title\\n  aliases\\n  description\\n  is_enabled\\n  display_order\\n  is_user_enabled\\n  is_agent_field\\n  defer_agent_validation\\n}\\n\\nfragment DateFieldDef on CustomDateDef {\\n  ...FieldDef\\n  dateSettings: settings {\\n    ...CustomDateSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CustomDateSettings on CustomDateSettings {\\n  defaultValue\\n  validWeekDays\\n  calendarType\\n  requireDateRange\\n  requireDateRangeDays\\n  userIsRequired\\n  agentIsRequired\\n  __typename\\n}\\n\\nfragment DateTimeFieldDef on CustomDateTimeDef {\\n  ...FieldDef\\n  dateSettings: settings {\\n    ...CustomDateSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CurrencyFieldDef on CustomCurrencyDef {\\n  ...FieldDef\\n  currencySettings: settings {\\n    currency {\\n      symbol\\n      decimal_places\\n      __typename\\n    }\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TextareaFieldDef on CustomTextareaDef {\\n  ...FieldDef\\n  textSettings: settings {\\n    ...CustomTextSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CustomTextSettings on CustomTextSettings {\\n  defaultValue\\n  parseLinks\\n  userValidation {\\n    minLength\\n    maxLength\\n    regexPattern\\n    regexRequired\\n    __typename\\n  }\\n  agentValidation {\\n    minLength\\n    maxLength\\n    regexPattern\\n    regexRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TextFieldDef on CustomTextDef {\\n  ...FieldDef\\n  textSettings: settings {\\n    ...CustomTextSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment UrlFieldDef on CustomUrlDef {\\n  ...FieldDef\\n  urlSettings: settings {\\n    allowNetworkLinks\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment NumberFieldDef on CustomNumberDef {\\n  ...FieldDef\\n  numberSettings: settings {\\n    defaultValue\\n    max\\n    min\\n    isSelect\\n    userIsRequired\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ToggleFieldDef on CustomToggleDef {\\n  ...FieldDef\\n  toggleSettings: settings {\\n    defaultState\\n    checkboxLabel\\n    uncheckedDisplayLabel\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment FileFieldDef on CustomFileDef {\\n  ...FieldDef\\n  fileSettings: settings {\\n    allowMultiple\\n    agentValidation {\\n      onlyAllowExt\\n      onlyRejectExt\\n      isRequired\\n      maxFileSize\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment JavascriptFieldDef on CustomJavascriptDef {\\n  ...FieldDef\\n  javascriptSettings: settings {\\n    code\\n    defaultValue\\n    parseLinks\\n    agentValidation {\\n      minLength\\n      maxLength\\n      regexPattern\\n      regexRequired\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment HiddenFieldDef on CustomHiddenDef {\\n  ...FieldDef\\n  hiddenSettings: settings {\\n    defaultValue\\n    cookieVariable\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DisplayFieldDef on CustomDisplayDef {\\n  ...FieldDef\\n  displaySettings: settings {\\n    html\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DepInfoProps on TicketDepartment {\\n  id\\n  title\\n  avatarUrn\\n  parent {\\n    id\\n    title\\n    avatarUrn\\n    __typename\\n  }\\n  children {\\n    id\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment LangInfoProps on Language {\\n  id\\n  flagUrn\\n  title\\n  locale\\n  __typename\\n}\\n\\nfragment FieldDefs on CustomFieldDef {\\n  id\\n  ...ChoiceFieldDef\\n  ...DisplayFieldDef\\n  ...HiddenFieldDef\\n  ...JavascriptFieldDef\\n  ...DateFieldDef\\n  ...DateTimeFieldDef\\n  ...FileFieldDef\\n  ...TextFieldDef\\n  ...TextareaFieldDef\\n  ...UrlFieldDef\\n  ...CurrencyFieldDef\\n  ...ToggleFieldDef\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":49,"time":39.43},"total":{"count":49,"time":39.43}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 61097,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 8570,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.508Z",
    time: 1434.0850000735372,
    timings: {
      blocked: 0.9089999902695417,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.225,
      wait: 1424.3320001121908,
      receive: 8.618999971076846,
      _blocked_queueing: 0.7019999902695417,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "12453",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 12453,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketMessages","variables":{"ticketId":"2"},"query":"query getTicketMessages($ticketId: ID!, $after: String) {\\n  ticket(id: $ticketId) {\\n    id\\n    messages(first: 15, after: $after, order: DESC) {\\n      totalCount\\n      edges {\\n        message {\\n          ...TicketMessageFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      pageInfo {\\n        endCursor\\n        hasNextPage\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment TicketMessageFragment on TicketMessage {\\n  ... on TicketMessageAgent {\\n    id\\n    messageNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    message\\n    messageSource\\n    date_created\\n    creationSystem\\n    emailDetails {\\n      toEmailAddress\\n      fromEmailAddress\\n      subject\\n      __typename\\n    }\\n    clientDetails {\\n      ipAddress\\n      hostname\\n      geoCountry\\n      __typename\\n    }\\n    attachments {\\n      ...ticketMessageAttachmentFragment\\n      __typename\\n    }\\n    feedbacks {\\n      id\\n      rating\\n      message\\n      date_created\\n      author {\\n        avatarUrn\\n        name\\n        __typename\\n      }\\n      __typename\\n    }\\n    primaryTranslation {\\n      message\\n      language {\\n        flagUrn\\n        title\\n        __typename\\n      }\\n      fromLanguage {\\n        title\\n        flagUrn\\n        __typename\\n      }\\n      __typename\\n    }\\n    emailDetails {\\n      subject\\n      toEmailAddress\\n      fromEmailAddress\\n      __typename\\n    }\\n    forwards(first: 15, order: ASC) {\\n      edges {\\n        ...messageForwardEdge\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on TicketMessageAgentNote {\\n    id\\n    messageNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    message\\n    messageSource\\n    date_created\\n    creationSystem\\n    emailDetails {\\n      toEmailAddress\\n      fromEmailAddress\\n      subject\\n      __typename\\n    }\\n    clientDetails {\\n      ipAddress\\n      hostname\\n      geoCountry\\n      __typename\\n    }\\n    feedbacks {\\n      id\\n      rating\\n      message\\n      date_created\\n      author {\\n        avatarUrn\\n        name\\n        __typename\\n      }\\n      __typename\\n    }\\n    attachments {\\n      ...ticketMessageAttachmentFragment\\n      __typename\\n    }\\n    primaryTranslation {\\n      message\\n      language {\\n        flagUrn\\n        title\\n        __typename\\n      }\\n      fromLanguage {\\n        title\\n        flagUrn\\n        __typename\\n      }\\n      __typename\\n    }\\n    emailDetails {\\n      subject\\n      toEmailAddress\\n      fromEmailAddress\\n      __typename\\n    }\\n    forwards(first: 15, order: ASC) {\\n      edges {\\n        ...messageForwardEdge\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on TicketMessageUser {\\n    id\\n    isHidden\\n    messageNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    message\\n    messageSource\\n    date_created\\n    creationSystem\\n    emailDetails {\\n      toEmailAddress\\n      fromEmailAddress\\n      subject\\n      __typename\\n    }\\n    clientDetails {\\n      ipAddress\\n      hostname\\n      geoCountry\\n      __typename\\n    }\\n    attachments {\\n      ...ticketMessageAttachmentFragment\\n      __typename\\n    }\\n    emailRecipients {\\n      type\\n      email\\n      person {\\n        id\\n        avatarUrn\\n        name\\n        __typename\\n      }\\n      __typename\\n    }\\n    primaryTranslation {\\n      message\\n      language {\\n        flagUrn\\n        title\\n        __typename\\n      }\\n      fromLanguage {\\n        title\\n        flagUrn\\n        __typename\\n      }\\n      __typename\\n    }\\n    emailDetails {\\n      subject\\n      toEmailAddress\\n      fromEmailAddress\\n      __typename\\n    }\\n    isHidden\\n    forwards(first: 15, order: ASC) {\\n      edges {\\n        ...messageForwardEdge\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on TicketMessageVoice {\\n    id\\n    messageNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    message\\n    date_created\\n    creationSystem\\n    call {\\n      id\\n      timeToNow\\n      dateCreated\\n      dateStarted\\n      dateEnded\\n      person {\\n        id\\n        name\\n        primary_email\\n        __typename\\n      }\\n      participants {\\n        __typename\\n        ... on VoicePhoneCallAgentParticipant {\\n          agent {\\n            ...VoiceAgentInfoProps\\n            __typename\\n          }\\n          data {\\n            name\\n            value\\n            __typename\\n          }\\n          __typename\\n        }\\n        ... on VoicePhoneCallUserParticipant {\\n          person {\\n            ...BasicUserProps\\n            __typename\\n          }\\n          data {\\n            name\\n            value\\n            __typename\\n          }\\n          __typename\\n        }\\n      }\\n      status\\n      type\\n      externalNumber\\n      externalNumberType\\n      number {\\n        id\\n        number\\n        __typename\\n      }\\n      numberPlain\\n      duration\\n      recordingEnabled\\n      fullRecording {\\n        blob {\\n          id\\n          download_url\\n          filesize\\n          __typename\\n        }\\n        __typename\\n      }\\n      costCurrency\\n      cost\\n      ticket {\\n        id\\n        __typename\\n      }\\n      agentVoicemail {\\n        duration\\n        blob {\\n          id\\n          download_url\\n          filesize\\n          __typename\\n        }\\n        transcription\\n        __typename\\n      }\\n      logs {\\n        ...VoiceLogs\\n        __typename\\n      }\\n      __typename\\n    }\\n    attachments {\\n      ...ticketMessageAttachmentFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on TicketMessageChat {\\n    id\\n    messageNumber\\n    chat {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment VoiceLogs on VoicePhoneCallLog {\\n  ... on VoicePhoneCallNewIncomingLog {\\n    dateCreated\\n    fromNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallNewOutgoingLog {\\n    dateCreated\\n    toNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallUserDisconnectedLog {\\n    dateCreated\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallUserJoinedLog {\\n    dateCreated\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallUserLeftLog {\\n    dateCreated\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallStartedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallEndedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallFailedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentInviteTimeoutLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantHoldLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantMutedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantUnholdLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantUnmutedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentCancelInviteLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentDisconnectedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentHangupLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentIgnoreInviteLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentInvitedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentJoinedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentLeftLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentTransferLog {\\n    dateCreated\\n    targetAgent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    inviteType\\n    __typename\\n  }\\n  ... on VoicePhoneCallQueueTransferLog {\\n    dateCreated\\n    targetQueue {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantTransferLog {\\n    dateCreated\\n    targetAutoAttendant {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAnsweredLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantExtensionLog {\\n    dateCreated\\n    enteredCode\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressExtensionKeyLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressKeyLog {\\n    dateCreated\\n    pressedKey\\n    nullableAgent: targetAgent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    nullableQueue: targetQueue {\\n      id\\n      name\\n      __typename\\n    }\\n    nullableAutoAttendant: targetAutoAttendant {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressRepeatKeyLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressUnsupportedKeyLog {\\n    dateCreated\\n    pressedKey\\n    __typename\\n  }\\n  ... on VoicePhoneCallRecordingDownloadedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallRecordingDeletedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallForwardAnsweredLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    forwardedNumber\\n    __typename\\n  }\\n  ... on VoicePhoneCallRejectedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallTargetLog {\\n    dateCreated\\n    nullableAgent: targetAgent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    nullableQueue: targetQueue {\\n      id\\n      name\\n      __typename\\n    }\\n    nullableAutoAttendant: targetAutoAttendant {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment messageForwardEdge on PagedTicketMessageForwardsEdge {\\n  cursor\\n  forward {\\n    id\\n    subject\\n    tos {\\n      email\\n      person {\\n        id\\n        display_name\\n        avatarUrn\\n        primary_email\\n        __typename\\n      }\\n      __typename\\n    }\\n    ccs {\\n      email\\n      person {\\n        id\\n        display_name\\n        avatarUrn\\n        primary_email\\n        __typename\\n      }\\n      __typename\\n    }\\n    bccs {\\n      email\\n      person {\\n        id\\n        display_name\\n        avatarUrn\\n        primary_email\\n        __typename\\n      }\\n      __typename\\n    }\\n    from {\\n      email\\n      person {\\n        id\\n        emails\\n        avatarUrn\\n        display_name\\n        __typename\\n      }\\n      __typename\\n    }\\n    message\\n    blobs {\\n      id\\n      __typename\\n    }\\n    ticket {\\n      id\\n      __typename\\n    }\\n    newTicket {\\n      id\\n      __typename\\n    }\\n    date_created\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment VoiceAgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ticketMessageAttachmentFragment on TicketAttachment {\\n  id\\n  is_inline\\n  filesize\\n  filename\\n  content_type\\n  downloadUrl\\n  file_url\\n  __typename\\n}\\n\\nfragment BasicUserProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  orgMember {\\n    id\\n    position\\n    isManager\\n    org {\\n      id\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":104,"time":63.01},"total":{"count":104,"time":63.01}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 33700,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 8575,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.512Z",
    time: 1430.3239998407662,
    timings: {
      blocked: 0.9409999902695417,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.181,
      wait: 1420.6809999271482,
      receive: 8.520999923348427,
      _blocked_queueing: 0.7019999902695417,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "250",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 250,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"newUserOrgOptions","variables":{},"query":"query newUserOrgOptions($searchTerm: String) {\\n  orgs(filter: {name: $searchTerm}) {\\n    orgs {\\n      id\\n      name\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:25 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":8,"time":16.9},"total":{"count":8,"time":16.9}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 1511,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 950,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:25.420Z",
    time: 522.4939999170601,
    timings: {
      blocked: 1.1999998789578676,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.182,
      wait: 512.6820001091808,
      receive: 8.429999928921461,
      _blocked_queueing: 0.9319998789578676,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "memory",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/61AAAAAAAAAAAAAAA0/150-7.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "date",
          value: "Mon, 21 Jun 2021 17:52:22 GMT",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "etag",
          value: 'W/"c69ad08a9e59c65ab0f084bf7d1b90d7"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="150-7.jpg"',
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="150-7.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "content-length",
          value: "7463",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 7463,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:26.100Z",
    time: 0.18400000408291817,
    timings: {
      blocked: -1,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.16799988225102425,
      receive: 0.01600012183189392,
      _blocked_queueing: -1,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "memory",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/63AAAAAAAAAAAAAAA0/150-9.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "date",
          value: "Mon, 21 Jun 2021 17:52:22 GMT",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "etag",
          value: 'W/"a69081748564e259c7ad8837aa98bad7"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="150-9.jpg"',
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="150-9.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "content-length",
          value: "5643",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 5643,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:26.201Z",
    time: 0.20199990831315517,
    timings: {
      blocked: -1,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.18500001169741154,
      receive: 0.016999896615743637,
      _blocked_queueing: -1,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1389",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1389,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"orgTickets","variables":{"orgId":"50"},"query":"query orgTickets($orgId: ID!) {\\n  pendingtickets: tickets(\\n    filter: {organizationIds: [$orgId], notStatusIds: \\"resolved\\"}\\n    perPage: 25\\n    sort: DESC\\n    orderBy: \\"urgency\\"\\n  ) {\\n    tickets {\\n      ...ticketCardFragment\\n      __typename\\n    }\\n    totalCount\\n    __typename\\n  }\\n  resolvedtickets: tickets(\\n    filter: {organizationIds: [$orgId], statusIds: \\"resolved\\"}\\n    perPage: 25\\n    sort: DESC\\n    orderBy: \\"date_resolved\\"\\n  ) {\\n    tickets {\\n      ...ticketCardFragment\\n      __typename\\n    }\\n    totalCount\\n    __typename\\n  }\\n}\\n\\nfragment ticketCardFragment on Ticket {\\n  id\\n  __typename\\n  subject\\n  urgency\\n  status {\\n    id\\n    status_type\\n    parent {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n  organization {\\n    id\\n    __typename\\n  }\\n  department {\\n    id\\n    title\\n    avatarUrn\\n    __typename\\n  }\\n  agent {\\n    id\\n    display_name\\n    avatarUrn\\n    __typename\\n  }\\n  person {\\n    id\\n    display_name\\n    avatarUrn\\n    primary_email\\n    orgMember {\\n      id\\n      org {\\n        id\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  links {\\n    parent {\\n      id\\n      subject\\n      __typename\\n    }\\n    __typename\\n  }\\n  ccs {\\n    id\\n    __typename\\n  }\\n  date_last_log_action\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:26 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":15,"time":22.59},"total":{"count":15,"time":22.59}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 173,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 617,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.843Z",
    time: 1280.0649998243898,
    timings: {
      blocked: 0.9299999554157257,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.14399999999999996,
      wait: 1277.8739999783188,
      receive: 1.1169998906552792,
      _blocked_queueing: 0.7279999554157257,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1421",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1421,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketApprovals","variables":{"ticketIds":["2"]},"query":"query getTicketApprovals($ticketIds: [ID!]!) {\\n  ticketApprovals(ticketIds: $ticketIds) {\\n    id\\n    name\\n    description\\n    created_at\\n    cancelled_at\\n    created_by {\\n      id\\n      display_name\\n      __typename\\n    }\\n    cancelled_by {\\n      id\\n      __typename\\n    }\\n    type {\\n      id\\n      name\\n      description\\n      __typename\\n    }\\n    status\\n    responses {\\n      id\\n      message\\n      is_approved\\n      created_at\\n      approver {\\n        id\\n        __typename\\n      }\\n      __typename\\n    }\\n    approvers {\\n      id\\n      name\\n      display_name\\n      avatarUrn\\n      is_agent\\n      date_created\\n      is_deleted\\n      fields {\\n        __typename\\n      }\\n      labels {\\n        id\\n        label\\n        color {\\n          __typename\\n        }\\n        total\\n        __typename\\n      }\\n      contactRecords {\\n        __typename\\n      }\\n      notes {\\n        __typename\\n        totalCount\\n        edges {\\n          cursor\\n          note {\\n            id\\n            __typename\\n          }\\n          __typename\\n        }\\n      }\\n      tickets {\\n        totalCount\\n        tickets {\\n          id\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    required_approvals\\n    required_rejections\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:26 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":36,"time":46.34},"total":{"count":36,"time":46.34}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 2410,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1282,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.502Z",
    time: 1621.5149997733533,
    timings: {
      blocked: 0.8549998347610235,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.145,
      wait: 1619.5069999465943,
      receive: 1.0079999919980764,
      _blocked_queueing: 0.6509998347610235,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "6711",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 6711,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getUserFields","variables":{"userId":"1059"},"query":"query getUserFields($userId: ID!) {\\n  user(id: $userId) {\\n    id\\n    date_created\\n    dateLastLogin\\n    active\\n    creationSystem\\n    timezone\\n    language {\\n      ...LangInfoProps\\n      __typename\\n    }\\n    usergroups {\\n      id\\n      __typename\\n    }\\n    fields {\\n      ...CustomFields\\n      __typename\\n    }\\n    brands {\\n      ...BrandInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  userFieldDefs {\\n    ...FieldDefs\\n    __typename\\n  }\\n  perUserFields {\\n    ...PerUserField\\n    choices(userId: $userId) {\\n      id\\n      title\\n      display_order\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment LangInfoProps on Language {\\n  id\\n  flagUrn\\n  title\\n  locale\\n  __typename\\n}\\n\\nfragment CustomFields on CustomValueType {\\n  ... on CustomChoiceValue {\\n    id\\n    def {\\n      ...ChoiceFieldDef\\n      __typename\\n    }\\n    selected {\\n      id\\n      title\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomDateValue {\\n    id\\n    def {\\n      ... on CustomDateDef {\\n        ...DateFieldDef\\n        __typename\\n      }\\n      ... on CustomDateTimeDef {\\n        ...DateTimeFieldDef\\n        __typename\\n      }\\n      __typename\\n    }\\n    date\\n    __typename\\n  }\\n  ... on CustomInputValue {\\n    id\\n    value\\n    def {\\n      ... on CustomCurrencyDef {\\n        ...CurrencyFieldDef\\n        __typename\\n      }\\n      ... on CustomTextareaDef {\\n        ...TextareaFieldDef\\n        __typename\\n      }\\n      ... on CustomTextDef {\\n        ...TextFieldDef\\n        __typename\\n      }\\n      ... on CustomUrlDef {\\n        ...UrlFieldDef\\n        __typename\\n      }\\n      ... on CustomNumberDef {\\n        ...NumberFieldDef\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomToggleValue {\\n    id\\n    def {\\n      ...ToggleFieldDef\\n      __typename\\n    }\\n    isChecked\\n    __typename\\n  }\\n  ... on CustomFileValue {\\n    id\\n    def {\\n      ...FileFieldDef\\n      __typename\\n    }\\n    files {\\n      id\\n      filesize\\n      filename\\n      content_type\\n      file_url\\n      download_url\\n      date_created\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomJavascriptValue {\\n    id\\n    value\\n    def {\\n      ...JavascriptFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomHiddenValue {\\n    id\\n    def {\\n      ...HiddenFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomDisplayValue {\\n    id\\n    def {\\n      ...DisplayFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ChoiceFieldDef on CustomChoiceDef {\\n  ...FieldDef\\n  options {\\n    id\\n    parent {\\n      id\\n      title\\n      __typename\\n    }\\n    children {\\n      id\\n      title\\n      __typename\\n    }\\n    title\\n    depth\\n    display_order\\n    effective_display_order\\n    __typename\\n  }\\n  choiceSettings: settings {\\n    style\\n    defaultOptionId\\n    userIsRequired\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment FieldDef on CustomFieldDef {\\n  __typename\\n  id\\n  title\\n  aliases\\n  description\\n  is_enabled\\n  display_order\\n  is_user_enabled\\n  is_agent_field\\n  defer_agent_validation\\n}\\n\\nfragment DateFieldDef on CustomDateDef {\\n  ...FieldDef\\n  dateSettings: settings {\\n    ...CustomDateSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CustomDateSettings on CustomDateSettings {\\n  defaultValue\\n  validWeekDays\\n  calendarType\\n  requireDateRange\\n  requireDateRangeDays\\n  userIsRequired\\n  agentIsRequired\\n  __typename\\n}\\n\\nfragment DateTimeFieldDef on CustomDateTimeDef {\\n  ...FieldDef\\n  dateSettings: settings {\\n    ...CustomDateSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CurrencyFieldDef on CustomCurrencyDef {\\n  ...FieldDef\\n  currencySettings: settings {\\n    currency {\\n      symbol\\n      decimal_places\\n      __typename\\n    }\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TextareaFieldDef on CustomTextareaDef {\\n  ...FieldDef\\n  textSettings: settings {\\n    ...CustomTextSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CustomTextSettings on CustomTextSettings {\\n  defaultValue\\n  parseLinks\\n  userValidation {\\n    minLength\\n    maxLength\\n    regexPattern\\n    regexRequired\\n    __typename\\n  }\\n  agentValidation {\\n    minLength\\n    maxLength\\n    regexPattern\\n    regexRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TextFieldDef on CustomTextDef {\\n  ...FieldDef\\n  textSettings: settings {\\n    ...CustomTextSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment UrlFieldDef on CustomUrlDef {\\n  ...FieldDef\\n  urlSettings: settings {\\n    allowNetworkLinks\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment NumberFieldDef on CustomNumberDef {\\n  ...FieldDef\\n  numberSettings: settings {\\n    defaultValue\\n    max\\n    min\\n    isSelect\\n    userIsRequired\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ToggleFieldDef on CustomToggleDef {\\n  ...FieldDef\\n  toggleSettings: settings {\\n    defaultState\\n    checkboxLabel\\n    uncheckedDisplayLabel\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment FileFieldDef on CustomFileDef {\\n  ...FieldDef\\n  fileSettings: settings {\\n    allowMultiple\\n    agentValidation {\\n      onlyAllowExt\\n      onlyRejectExt\\n      isRequired\\n      maxFileSize\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment JavascriptFieldDef on CustomJavascriptDef {\\n  ...FieldDef\\n  javascriptSettings: settings {\\n    code\\n    defaultValue\\n    parseLinks\\n    agentValidation {\\n      minLength\\n      maxLength\\n      regexPattern\\n      regexRequired\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment HiddenFieldDef on CustomHiddenDef {\\n  ...FieldDef\\n  hiddenSettings: settings {\\n    defaultValue\\n    cookieVariable\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DisplayFieldDef on CustomDisplayDef {\\n  ...FieldDef\\n  displaySettings: settings {\\n    html\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment BrandInfoProps on Brand {\\n  id\\n  name\\n  iconUrl\\n  __typename\\n}\\n\\nfragment FieldDefs on CustomFieldDef {\\n  id\\n  ...ChoiceFieldDef\\n  ...DisplayFieldDef\\n  ...HiddenFieldDef\\n  ...JavascriptFieldDef\\n  ...DateFieldDef\\n  ...DateTimeFieldDef\\n  ...FileFieldDef\\n  ...TextFieldDef\\n  ...TextareaFieldDef\\n  ...UrlFieldDef\\n  ...CurrencyFieldDef\\n  ...ToggleFieldDef\\n  __typename\\n}\\n\\nfragment PerUserField on CustomPerUserFieldType {\\n  id\\n  title\\n  description\\n  is_enabled\\n  style\\n  allow_edit\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:26 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":26,"time":25.04},"total":{"count":26,"time":25.04}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 3806,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1414,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:25.422Z",
    time: 889.4909999798983,
    timings: {
      blocked: 1.5649998915195464,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.181,
      wait: 885.33499989824,
      receive: 2.410000190138817,
      _blocked_queueing: 1.2699998915195465,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "297",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 297,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"newUserOrgOptions","variables":{"searchTerm":"Swaniawski, Quitzon and Botsford"},"query":"query newUserOrgOptions($searchTerm: String) {\\n  orgs(filter: {name: $searchTerm}) {\\n    orgs {\\n      id\\n      name\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:26 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":8,"time":14.19},"total":{"count":8,"time":14.19}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 222,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 683,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:25.656Z",
    time: 655.7679998222739,
    timings: {
      blocked: 2.6869997733831408,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.22100000000000003,
      wait: 650.5809999249279,
      receive: 2.27900012396276,
      _blocked_queueing: 2.4469997733831406,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1436",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1436,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getLinkedTickets","variables":{"ticketId":"2"},"query":"query getLinkedTickets($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    status {\\n      id\\n      status_type\\n      parent {\\n        id\\n        __typename\\n      }\\n      title\\n      __typename\\n    }\\n    links {\\n      parent {\\n        ...ticketCardFragment\\n        __typename\\n      }\\n      children {\\n        tickets {\\n          ...ticketCardFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      siblings {\\n        tickets {\\n          ...ticketCardFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketCardFragment on Ticket {\\n  id\\n  __typename\\n  subject\\n  urgency\\n  status {\\n    id\\n    status_type\\n    parent {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n  organization {\\n    id\\n    __typename\\n  }\\n  department {\\n    id\\n    title\\n    avatarUrn\\n    __typename\\n  }\\n  agent {\\n    id\\n    display_name\\n    avatarUrn\\n    __typename\\n  }\\n  person {\\n    id\\n    display_name\\n    avatarUrn\\n    primary_email\\n    orgMember {\\n      id\\n      org {\\n        id\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  links {\\n    parent {\\n      id\\n      subject\\n      __typename\\n    }\\n    __typename\\n  }\\n  ccs {\\n    id\\n    __typename\\n  }\\n  date_last_log_action\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:26 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":29,"time":28.94},"total":{"count":29,"time":28.94}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 1220,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1036,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:24.506Z",
    time: 1805.206999881193,
    timings: {
      blocked: 0.8589998804479837,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.20999999999999996,
      wait: 1801.9659999930411,
      receive: 2.1720000077039003,
      _blocked_queueing: 0.6569998804479837,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/70AAAAAAAAAAAAAAA0/michael_jackson.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 06:58:12 GMT",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="michael_jackson.jpg"',
        },
        {
          name: "content-length",
          value: "4684",
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="michael_jackson.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "etag",
          value: 'W/"c238d75c8a43f5a9d7e48ea9a8bfb86f"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 4684,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:26.171Z",
    time: 2.329000039026141,
    timings: {
      blocked: 1.0030000825077297,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.7910000737160444,
      receive: 0.5349998828023672,
      _blocked_queueing: 0.8670000825077295,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/60AAAAAAAAAAAAAAA0/150-6.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Mon, 21 Jun 2021 17:52:22 GMT",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="150-6.jpg"',
        },
        {
          name: "content-length",
          value: "3559",
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="150-6.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "etag",
          value: 'W/"9caaaecaf3cf165007bfc819b070af42"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 3559,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:26.175Z",
    time: 2.051000017672777,
    timings: {
      blocked: 0.9270000151544809,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.7739998985826969,
      receive: 0.3500001039355993,
      _blocked_queueing: 0.7970000151544809,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/58AAAAAAAAAAAAAAA0/150-4.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Mon, 21 Jun 2021 17:52:22 GMT",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="150-4.jpg"',
        },
        {
          name: "content-length",
          value: "5220",
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="150-4.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "etag",
          value: 'W/"fdc6f13b04d36db28df0de0fada93e3a"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 5220,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:26.178Z",
    time: 1.9580000080168247,
    timings: {
      blocked: 0.9030000880807638,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.6470000728517771,
      receive: 0.40799984708428383,
      _blocked_queueing: 0.7760000880807638,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "136",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 136,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketMacros","variables":{},"query":"query getTicketMacros {\\n  ticketMacros {\\n    id\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:26 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":8,"time":20.01},"total":{"count":8,"time":20.01}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 408,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 613,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:25.938Z",
    time: 553.3590000122786,
    timings: {
      blocked: 1.386999902665615,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.16800000000000004,
      wait: 550.0600001012832,
      receive: 1.744000008329749,
      _blocked_queueing: 1.087999902665615,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "199",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 199,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"generateBlobUploadRequest","variables":{},"query":"mutation generateBlobUploadRequest {\\n  generateBlobUploadRequest {\\n    id\\n    token\\n    upload_url\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:26 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":9,"time":14.21},"insert":{"count":1,"time":0.5},"total":{"count":10,"time":14.71}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 240,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 733,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:25.939Z",
    time: 552.79800016433,
    timings: {
      blocked: 1.3010000637471677,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.21599999999999997,
      wait: 549.6739999712854,
      receive: 1.6070001292973757,
      _blocked_queueing: 1.0480000637471676,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "199",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 199,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"generateBlobUploadRequest","variables":{},"query":"mutation generateBlobUploadRequest {\\n  generateBlobUploadRequest {\\n    id\\n    token\\n    upload_url\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:26 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":9,"time":14.83},"insert":{"count":1,"time":0.86},"total":{"count":10,"time":15.69}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 240,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 737,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:25.940Z",
    time: 552.1150000859052,
    timings: {
      blocked: 1.220000019237399,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.16300000000000003,
      wait: 549.2310000460147,
      receive: 1.5010000206530094,
      _blocked_queueing: 0.9810000192373991,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "199",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 199,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"generateBlobUploadRequest","variables":{},"query":"mutation generateBlobUploadRequest {\\n  generateBlobUploadRequest {\\n    id\\n    token\\n    upload_url\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:26 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":9,"time":15.56},"insert":{"count":1,"time":2.06},"total":{"count":10,"time":17.62}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 240,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 734,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:25.941Z",
    time: 550.4240000154823,
    timings: {
      blocked: 1.9670001319646835,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.29500000000000004,
      wait: 546.7500000748933,
      receive: 1.4119998086243868,
      _blocked_queueing: 1.2710001319646835,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "455",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 455,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"PerOrgFields","variables":{"orgId":"18"},"query":"query PerOrgFields($perOrgIds: [ID!], $orgId: ID!) {\\n  perOrganizationFields(ids: $perOrgIds) {\\n    ...PerOrgField\\n    choices(orgId: $orgId) {\\n      id\\n      title\\n      display_order\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment PerOrgField on CustomPerOrganizationFieldType {\\n  id\\n  title\\n  description\\n  is_enabled\\n  style\\n  allow_edit\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:26 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":6,"time":11.82},"total":{"count":6,"time":11.82}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 37,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 561,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:26.130Z",
    time: 541.6749999858439,
    timings: {
      blocked: 1.036000041216612,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.18600000000000003,
      wait: 538.4039999421835,
      receive: 2.0490000024437904,
      _blocked_queueing: 0.8310000412166119,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "451",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 451,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"PerUserFields","variables":{"userId":"1059"},"query":"query PerUserFields($perUserIds: [ID!], $userId: ID!) {\\n  perUserFields(ids: $perUserIds) {\\n    ...PerUserField\\n    choices(userId: $userId) {\\n      id\\n      title\\n      display_order\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment PerUserField on CustomPerUserFieldType {\\n  id\\n  title\\n  description\\n  is_enabled\\n  style\\n  allow_edit\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:26 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":6,"time":16.08},"total":{"count":6,"time":16.08}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 29,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 553,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:26.129Z",
    time: 542.6129999104887,
    timings: {
      blocked: 1.2799999647587539,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.492,
      wait: 538.848999911651,
      receive: 1.9920000340789557,
      _blocked_queueing: 1.0349999647587538,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "452",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 452,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getHelpdeskAgents","variables":{},"query":"query getHelpdeskAgents {\\n  users(filter: {isAgent: true}, perPage: 100, orderBy: name) {\\n    users {\\n      ...AgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment AgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:26 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":31,"time":27.61},"total":{"count":31,"time":27.61}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 3571,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1241,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:26.128Z",
    time: 543.5969999525696,
    timings: {
      blocked: 1.0799999879151583,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.15999999999999998,
      wait: 540.4649999935328,
      receive: 1.8919999711215496,
      _blocked_queueing: 0.8239999879151583,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1520",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1520,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketForwardMessages","variables":{"ticketId":"2"},"query":"query getTicketForwardMessages($ticketId: ID!, $fromMessageId: ID) {\\n  ticketMessages(\\n    ticketId: $ticketId\\n    fromMessageId: $fromMessageId\\n    ignoreAgentNotes: true\\n    first: 15\\n    order: DESC\\n  ) {\\n    edges {\\n      message {\\n        ...forwardMessageInfomation\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment forwardMessageInfomation on TicketMessage {\\n  ... on TicketMessageAgent {\\n    id\\n    messageNumber\\n    person {\\n      id\\n      __typename\\n    }\\n    message\\n    date_created\\n    creationSystem\\n    emailDetails {\\n      toEmailAddress\\n      fromEmailAddress\\n      __typename\\n    }\\n    clientDetails {\\n      ipAddress\\n      hostname\\n      geoCountry\\n      __typename\\n    }\\n    attachments {\\n      ...ticketMessageAttachmentFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on TicketMessageUser {\\n    id\\n    messageNumber\\n    person {\\n      id\\n      __typename\\n    }\\n    message\\n    date_created\\n    creationSystem\\n    emailDetails {\\n      toEmailAddress\\n      fromEmailAddress\\n      __typename\\n    }\\n    clientDetails {\\n      ipAddress\\n      hostname\\n      geoCountry\\n      __typename\\n    }\\n    isHidden\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ticketMessageAttachmentFragment on TicketAttachment {\\n  id\\n  is_inline\\n  filesize\\n  filename\\n  content_type\\n  downloadUrl\\n  file_url\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:26 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":15,"time":21.51},"total":{"count":15,"time":21.51}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 12930,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 5123,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:25.941Z",
    time: 730.6119999848306,
    timings: {
      blocked: 1.790999970331788,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 1.1989999999999998,
      wait: 725.4729999490976,
      receive: 2.1490000654011965,
      _blocked_queueing: 0.9439999703317881,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "memory",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/416AAAAAAAAAAAAAAA0/elephant.png",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "date",
          value: "Fri, 25 Jun 2021 06:58:13 GMT",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "etag",
          value: 'W/"9821f8302d77089053a85a3cdc1770c7"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "content-type",
          value: 'image/png; filename="elephant.png"',
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="elephant.png"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "content-length",
          value: "540",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 540,
        mimeType: "image/png",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:26.681Z",
    time: 0.22200006060302258,
    timings: {
      blocked: -1,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.20699994638562202,
      receive: 0.01500011421740055,
      _blocked_queueing: -1,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "memory",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/file.php/2AAAAAAAAAAAAAAA0/azure_weevils2.jpg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "date",
          value: "Mon, 21 Jun 2021 17:52:22 GMT",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "etag",
          value: 'W/"d3b2bfc1b536e51f2ad7ee9833c93ca2"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "content-type",
          value: 'image/jpeg; filename="azure_weevils2.jpg"',
        },
        {
          name: "cache-control",
          value: "max-age=604800,public",
        },
        {
          name: "cache-control",
          value: "private, must-revalidate",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="azure_weevils2.jpg"',
        },
        {
          name: "x-robots-tag",
          value: "noindex, nofollow",
        },
        {
          name: "content-length",
          value: "7047",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 7047,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:26.684Z",
    time: 0.22000004537403584,
    timings: {
      blocked: -1,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.20400015637278557,
      receive: 0.015999889001250267,
      _blocked_queueing: -1,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "memory",
    _initiator: null,
    _priority: "Low",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/agent-ui/app/static/media/us.14abad61.svg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "Referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:23:10 GMT",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "last-modified",
          value: "Thu, 24 Jun 2021 17:11:03 GMT",
        },
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "etag",
          value: '"60d4bca7-2ff"',
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "content-type",
          value: "image/svg+xml",
        },
        {
          name: "accept-ranges",
          value: "bytes",
        },
        {
          name: "content-length",
          value: "767",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
      ],
      cookies: [],
      content: {
        size: 767,
        mimeType: "image/svg+xml",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:26.687Z",
    time: 0.2359999343752861,
    timings: {
      blocked: -1,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.2210000529885292,
      receive: 0.014999881386756897,
      _blocked_queueing: -1,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "image",
    cache: {},
    connection: "1227786",
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://picsum.photos/seed/dpdev-59190/200/100",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "GET",
        },
        {
          name: ":authority",
          value: "picsum.photos",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/seed/dpdev-59190/200/100",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "accept",
          value:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        },
        {
          name: "sec-fetch-site",
          value: "cross-site",
        },
        {
          name: "sec-fetch-mode",
          value: "no-cors",
        },
        {
          name: "sec-fetch-dest",
          value: "image",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
      ],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 302,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:27 GMT",
        },
        {
          name: "content-length",
          value: "0",
        },
        {
          name: "strict-transport-security",
          value: "max-age=15552000",
        },
        {
          name: "access-control-allow-origin",
          value: "*",
        },
        {
          name: "cache-control",
          value: "no-cache, no-store, must-revalidate",
        },
        {
          name: "location",
          value:
            "https://i.picsum.photos/id/969/200/100.jpg?hmac=HNsAOGJf_PP4Elar5G9HmuECEx-OJ57OJIeo1Ogmbvc",
        },
        {
          name: "cf-cache-status",
          value: "DYNAMIC",
        },
        {
          name: "cf-request-id",
          value: "0ae3edd27100001893182d1000000001",
        },
        {
          name: "expect-ct",
          value:
            'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        },
        {
          name: "report-to",
          value:
            '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v2?s=O46zJ3YlUyrnWrIxyH5JhXCfeYY2gWzIHNATVHgwaInUH0ObqqM%2BPIh9h3sdpcWxR2Acxckc40ocutSBVBuQ%2BFPKM7ZaR8zOWU2Xzd5%2BKE6FKuI5aC0Q%2BQgC"}],"group":"cf-nel","max_age":604800}',
        },
        {
          name: "nel",
          value: '{"report_to":"cf-nel","max_age":604800}',
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "server",
          value: "cloudflare",
        },
        {
          name: "cf-ray",
          value: "664ce5971aaa1893-MAN",
        },
        {
          name: "alt-svc",
          value:
            'h3-27=":443"; ma=86400, h3-28=":443"; ma=86400, h3-29=":443"; ma=86400, h3=":443"; ma=86400',
        },
      ],
      cookies: [],
      content: {
        size: 0,
        mimeType: "x-unknown",
      },
      redirectURL:
        "https://i.picsum.photos/id/969/200/100.jpg?hmac=HNsAOGJf_PP4Elar5G9HmuECEx-OJ57OJIeo1Ogmbvc",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 671,
      _error: null,
    },
    serverIPAddress: "172.67.74.163",
    startedDateTime: "2021-06-25T08:41:26.509Z",
    time: 558.881000137508,
    timings: {
      blocked: 0.7620000415295363,
      dns: 32.382999999999996,
      ssl: 28.120000000000005,
      connect: 81.525,
      send: 0.19400000000000261,
      wait: 130.6049999036491,
      receive: 313.4120001923293,
      _blocked_queueing: 0.6170000415295362,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "627",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 627,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"searchUsers","variables":{"email":"","ticketId":"2","isAgent":false},"query":"query searchUsers($ticketId: ID!, $email: String, $isAgent: Boolean) {\\n  ticket(id: $ticketId) {\\n    person {\\n      id\\n      primary_email\\n      display_name\\n      avatarUrn\\n      __typename\\n    }\\n    ccs {\\n      id\\n      primary_email\\n      display_name\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n  users(filter: {email: $email, isAgent: $isAgent}, perPage: 50) {\\n    users {\\n      id\\n      primary_email\\n      display_name\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:26 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":19,"time":26.84},"total":{"count":19,"time":26.84}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 9918,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 2365,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:25.937Z",
    time: 929.1060001123697,
    timings: {
      blocked: 1.0459999269992113,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.18899999999999997,
      wait: 922.08200011006,
      receive: 5.789000075310469,
      _blocked_queueing: 0.8159999269992113,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _fromCache: "disk",
    _initiator: null,
    _priority: "High",
    _resourceType: "image",
    cache: {},
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://i.picsum.photos/id/969/200/100.jpg?hmac=HNsAOGJf_PP4Elar5G9HmuECEx-OJ57OJIeo1Ogmbvc",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "Referer",
          value: "",
        },
        {
          name: "User-Agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
      ],
      queryString: [
        {
          name: "hmac",
          value: "HNsAOGJf_PP4Elar5G9HmuECEx-OJ57OJIeo1Ogmbvc",
        },
      ],
      cookies: [],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "date",
          value: "Fri, 25 Jun 2021 06:58:13 GMT",
        },
        {
          name: "content-type",
          value: "image/jpeg",
        },
        {
          name: "content-length",
          value: "4706",
        },
        {
          name: "access-control-allow-origin",
          value: "*",
        },
        {
          name: "access-control-expose-headers",
          value: "Picsum-ID",
        },
        {
          name: "cache-control",
          value: "public, max-age=2592000",
        },
        {
          name: "cf-bgj",
          value: "h2pri",
        },
        {
          name: "content-disposition",
          value: 'inline; filename="969-200x100.jpg"',
        },
        {
          name: "picsum-id",
          value: "969",
        },
        {
          name: "via",
          value: "1.1 varnish (Varnish/6.2)",
        },
        {
          name: "x-varnish",
          value: "769983785 683704991",
        },
        {
          name: "cf-cache-status",
          value: "HIT",
        },
        {
          name: "accept-ranges",
          value: "bytes",
        },
        {
          name: "cf-request-id",
          value: "0ae38f51bb000054e16d989000000001",
        },
        {
          name: "expect-ct",
          value:
            'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        },
        {
          name: "report-to",
          value:
            '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v2?s=NxR3edMVjYIFHYWmCN2CDKYA8li%2F8%2BmZqxbjHwPimojjlUSH7rAjUOObFYg41%2BwZWPiL8dISfIBAYZOPNWzEUX28WJmUlbHUcWjJRxEQjnHMv5W0QZGNckJ5AOA%3D"}],"group":"cf-nel","max_age":604800}',
        },
        {
          name: "nel",
          value: '{"report_to":"cf-nel","max_age":604800}',
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "server",
          value: "cloudflare",
        },
        {
          name: "cf-ray",
          value: "664c4e62c90654e1-MAN",
        },
        {
          name: "alt-svc",
          value:
            'h3-27=":443"; ma=86400, h3-28=":443"; ma=86400, h3-29=":443"; ma=86400, h3=":443"; ma=86400',
        },
      ],
      cookies: [],
      content: {
        size: 4706,
        mimeType: "image/jpeg",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: 0,
      _transferSize: 0,
      _error: null,
    },
    serverIPAddress: "172.67.74.163",
    startedDateTime: "2021-06-25T08:41:27.035Z",
    time: 10.231999913230538,
    timings: {
      blocked: 9.64599991416931,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0,
      wait: 0.31100000055134297,
      receive: 0.2749999985098839,
      _blocked_queueing: 9.589999914169312,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1403",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1403,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"userProfileTickets","variables":{"userId":"1059"},"query":"query userProfileTickets($userId: ID!) {\\n  pendingtickets: tickets(\\n    filter: {personIds: [$userId], notStatusIds: [\\"resolved\\"]}\\n    perPage: 25\\n    sort: DESC\\n    orderBy: \\"urgency\\"\\n  ) {\\n    tickets {\\n      ...ticketCardFragment\\n      __typename\\n    }\\n    totalCount\\n    __typename\\n  }\\n  resolvedtickets: tickets(\\n    filter: {personIds: [$userId], statusIds: [\\"resolved\\"]}\\n    perPage: 25\\n    sort: DESC\\n    orderBy: \\"date_resolved\\"\\n  ) {\\n    tickets {\\n      ...ticketCardFragment\\n      __typename\\n    }\\n    totalCount\\n    __typename\\n  }\\n}\\n\\nfragment ticketCardFragment on Ticket {\\n  id\\n  __typename\\n  subject\\n  urgency\\n  status {\\n    id\\n    status_type\\n    parent {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n  organization {\\n    id\\n    __typename\\n  }\\n  department {\\n    id\\n    title\\n    avatarUrn\\n    __typename\\n  }\\n  agent {\\n    id\\n    display_name\\n    avatarUrn\\n    __typename\\n  }\\n  person {\\n    id\\n    display_name\\n    avatarUrn\\n    primary_email\\n    orgMember {\\n      id\\n      org {\\n        id\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  links {\\n    parent {\\n      id\\n      subject\\n      __typename\\n    }\\n    __typename\\n  }\\n  ccs {\\n    id\\n    __typename\\n  }\\n  date_last_log_action\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:26 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":36,"time":30.23},"total":{"count":36,"time":30.23}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 3172,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1312,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:25.423Z",
    time: 1619.9910000432283,
    timings: {
      blocked: 1.39900002245605,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.243,
      wait: 1618.0200000767409,
      receive: 0.32899994403123856,
      _blocked_queueing: 1.01200002245605,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "237",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 237,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"GetBrands","variables":{},"query":"query GetBrands($ids: [ID!]) {\\n  brands(ids: $ids) {\\n    ...BrandInfoProps\\n    __typename\\n  }\\n}\\n\\nfragment BrandInfoProps on Brand {\\n  id\\n  name\\n  iconUrl\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:27 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":10,"time":19.21},"total":{"count":10,"time":19.21}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 677,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 750,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:26.578Z",
    time: 668.165999930352,
    timings: {
      blocked: 1.2670001170486211,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.24700000000000003,
      wait: 662.7809999070913,
      receive: 3.8709999062120914,
      _blocked_queueing: 1.0550001170486212,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "174",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 174,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"newUserSupportedTimeZones","variables":{},"query":"query newUserSupportedTimeZones {\\n  timezones {\\n    id\\n    group\\n    name\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:27 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":5,"time":14.59},"total":{"count":5,"time":14.59}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 36688,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 5617,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:26.577Z",
    time: 669.5489999838173,
    timings: {
      blocked: 1.169999898582697,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.16199999999999998,
      wait: 664.2849999473691,
      receive: 3.9320001378655434,
      _blocked_queueing: 0.9039998985826969,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "199",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 199,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"generateBlobUploadRequest","variables":{},"query":"mutation generateBlobUploadRequest {\\n  generateBlobUploadRequest {\\n    id\\n    token\\n    upload_url\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:27 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":9,"time":17.36},"insert":{"count":1,"time":0.83},"total":{"count":10,"time":18.19}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 240,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 738,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:26.963Z",
    time: 637.624999973923,
    timings: {
      blocked: 1.3480000581741334,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.19400000000000003,
      wait: 633.6550000542104,
      receive: 2.42799986153841,
      _blocked_queueing: 1.1390000581741333,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "562",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 562,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketStatusInfo","variables":{"ticketId":"2"},"query":"query getTicketStatusInfo($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    urgency\\n    status {\\n      ...TicketStatusInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment TicketStatusInfoProps on TicketStatus {\\n  id\\n  status_type\\n  title\\n  effective_display_order\\n  parent {\\n    id\\n    title\\n    status_type\\n    __typename\\n  }\\n  children {\\n    id\\n    status_type\\n    title\\n    effective_display_order\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:28 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":14,"time":28.77},"total":{"count":14,"time":28.77}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 385,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 697,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.084Z",
    time: 2134.4379999209195,
    timings: {
      blocked: 1.7170000098198652,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.30700000000000005,
      wait: 2129.1419999093564,
      receive: 3.272000001743436,
      _blocked_queueing: 1.4690000098198652,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "611",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 611,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"searchUsers","variables":{"email":"","ticketId":"2"},"query":"query searchUsers($ticketId: ID!, $email: String, $isAgent: Boolean) {\\n  ticket(id: $ticketId) {\\n    person {\\n      id\\n      primary_email\\n      display_name\\n      avatarUrn\\n      __typename\\n    }\\n    ccs {\\n      id\\n      primary_email\\n      display_name\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n  users(filter: {email: $email, isAgent: $isAgent}, perPage: 50) {\\n    users {\\n      id\\n      primary_email\\n      display_name\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:28 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":20,"time":46.52},"total":{"count":20,"time":46.52}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 9873,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 2350,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:26.961Z",
    time: 2257.653000066057,
    timings: {
      blocked: 1.501999949529767,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.20900000000000007,
      wait: 2252.90400003393,
      receive: 3.0380000825971365,
      _blocked_queueing: 1.032999949529767,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "565",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 565,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getAddedSlas","variables":{"ticketId":"2"},"query":"query getAddedSlas($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    slas {\\n      ...addedSla\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment defaultSla on Sla {\\n  id\\n  title\\n  sla_type\\n  apply_type\\n  warn_time\\n  warn_time_unit\\n  fail_time\\n  fail_time_unit\\n  __typename\\n}\\n\\nfragment addedSla on TicketSla {\\n  id\\n  sla_status\\n  is_completed\\n  fail_date\\n  warn_date\\n  completed_time_taken\\n  sla {\\n    ...defaultSla\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":15,"time":24.77},"total":{"count":15,"time":24.77}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 404,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 746,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.093Z",
    time: 2125.812000129372,
    timings: {
      blocked: 1.382000059351325,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.16100000000000003,
      wait: 2121.4369999261944,
      receive: 2.832000143826008,
      _blocked_queueing: 1.078000059351325,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "256",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 256,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"ticketTabInfo","variables":{"id":"2"},"query":"query ticketTabInfo($id: ID!) {\\n  ticket(id: $id) {\\n    id\\n    subject\\n    person {\\n      id\\n      display_name\\n      primary_email\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":14,"time":28.78},"total":{"count":14,"time":28.78}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 223,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 688,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.074Z",
    time: 2145.57099994272,
    timings: {
      blocked: 1.7489998639672995,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.273,
      wait: 2140.8419999554158,
      receive: 2.707000123336911,
      _blocked_queueing: 1.5109998639672995,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "586",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 586,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketLockStatus","variables":{"ticketId":"2"},"query":"query getTicketLockStatus($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    lock {\\n      ...TicketLockProps\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment TicketLockProps on TicketLock {\\n  id\\n  agent {\\n    ...AgentInfoProps\\n    __typename\\n  }\\n  date\\n  __typename\\n}\\n\\nfragment AgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":13,"time":29.76},"total":{"count":13,"time":29.76}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 64,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 582,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.079Z",
    time: 2340.9669999964535,
    timings: {
      blocked: 1.0090000391751528,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.20599999999999996,
      wait: 2337.883999936074,
      receive: 1.8680000212043524,
      _blocked_queueing: 0.7390000391751528,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "263",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 263,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"ticketUsersTab","variables":{"id":"2"},"query":"query ticketUsersTab($id: ID!) {\\n  ticket(id: $id) {\\n    id\\n    subject\\n    person {\\n      id\\n      __typename\\n    }\\n    ccs {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":15,"time":24.37},"total":{"count":15,"time":24.37}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 163,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 651,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.076Z",
    time: 2344.446999952197,
    timings: {
      blocked: 1.4270000637471676,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.262,
      wait: 2340.977000064045,
      receive: 1.7809998244047165,
      _blocked_queueing: 1.0480000637471676,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "251",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 251,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"activeMessengerChats","variables":{"ticketId":"2"},"query":"query activeMessengerChats($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    chats {\\n      id\\n      date_ended\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":14,"time":40.78},"total":{"count":14,"time":40.78}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 63,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 581,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.091Z",
    time: 2521.826999960467,
    timings: {
      blocked: 1.44200005055964,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.27899999999999997,
      wait: 2518.6469999762326,
      receive: 1.4589999336749315,
      _blocked_queueing: 1.13800005055964,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1051",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1051,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getBasicTicketInfo","variables":{"ticketId":"2"},"query":"query getBasicTicketInfo($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    subject\\n    agent_team {\\n      id\\n      __typename\\n    }\\n    agent {\\n      id\\n      __typename\\n    }\\n    person {\\n      id\\n      primary_email\\n      display_name\\n      __typename\\n    }\\n    status {\\n      id\\n      __typename\\n    }\\n    ccs {\\n      id\\n      primary_email\\n      display_name\\n      avatarUrn\\n      __typename\\n    }\\n    lock {\\n      ...TicketLockProps\\n      __typename\\n    }\\n    language {\\n      id\\n      title\\n      locale\\n      __typename\\n    }\\n    forwardEmailAccountAddress\\n    __typename\\n  }\\n}\\n\\nfragment TicketLockProps on TicketLock {\\n  id\\n  agent {\\n    ...AgentInfoProps\\n    __typename\\n  }\\n  date\\n  __typename\\n}\\n\\nfragment AgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":20,"time":34.77},"total":{"count":20,"time":34.77}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 497,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 810,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.097Z",
    time: 2516.18400006555,
    timings: {
      blocked: 1.184000149860978,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.179,
      wait: 2513.4549999916703,
      receive: 1.365999924018979,
      _blocked_queueing: 0.9370001498609781,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "724",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 724,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getLinkedCommunity","variables":{"ticketId":"2"},"query":"query getLinkedCommunity($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    linkedCommunityTopics {\\n      ...getCommunityTopicLink\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment getCommunityTopic on CommunityTopic {\\n  id\\n  num_ratings\\n  author {\\n    name\\n    emails\\n    avatarUrn\\n    is_agent\\n    __typename\\n  }\\n  status\\n  forum {\\n    title\\n    iconUrn\\n    splashImageUrn\\n    __typename\\n  }\\n  title\\n  comments {\\n    totalCount\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment getCommunityTopicLink on CommunityTopicLink {\\n  id\\n  topic {\\n    ...getCommunityTopic\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":34,"time":59.49},"total":{"count":34,"time":59.49}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 2777,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1272,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.102Z",
    time: 2511.269000126049,
    timings: {
      blocked: 1.1820000336021184,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.18600000000000005,
      wait: 2508.610000041023,
      receive: 1.2910000514239073,
      _blocked_queueing: 0.8300000336021185,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "413",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 413,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"ticketOrgTabInfo","variables":{"ticketId":"2"},"query":"query ticketOrgTabInfo($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    person {\\n      ...personWithOrgIdFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment personWithOrgIdFragment on UserInfo {\\n  id\\n  orgMember {\\n    id\\n    org {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":15,"time":24.87},"total":{"count":15,"time":24.87}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 215,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 636,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.078Z",
    time: 2535.1190001238137,
    timings: {
      blocked: 1.3010001138299705,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.15199999999999997,
      wait: 2531.858999987602,
      receive: 1.8070000223815441,
      _blocked_queueing: 1.0240001138299704,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "343",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 343,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketAgentTeam","variables":{"ticketId":"2"},"query":"query getTicketAgentTeam($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    agent_team {\\n      ...AgentTeamInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment AgentTeamInfoProps on AgentTeam {\\n  id\\n  name\\n  avatarUrn\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":13,"time":29.5},"total":{"count":13,"time":29.5}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 70,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 586,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.110Z",
    time: 2503.452999982983,
    timings: {
      blocked: 1.5300000906735658,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.198,
      wait: 2500.150000006676,
      receive: 1.5749998856335878,
      _blocked_queueing: 1.2350000906735659,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "425",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 425,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketInfoForPermissions","variables":{"ticketId":"2"},"query":"query getTicketInfoForPermissions($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    ...TicketInfoForPermissions\\n    __typename\\n  }\\n}\\n\\nfragment TicketInfoForPermissions on Ticket {\\n  id\\n  agent {\\n    id\\n    __typename\\n  }\\n  agent_team {\\n    id\\n    __typename\\n  }\\n  followers {\\n    id\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":15,"time":24.91},"total":{"count":15,"time":24.91}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 128,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 618,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.083Z",
    time: 2530.3579999599606,
    timings: {
      blocked: 2.126999976694584,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.21800000000000003,
      wait: 2526.329999973759,
      receive: 1.6830000095069408,
      _blocked_queueing: 1.800999976694584,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "916",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 916,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"outboundToUsers","variables":{"ticketId":"2"},"query":"query outboundToUsers($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    person {\\n      ...BasicUserProps\\n      phoneNumbers {\\n        id\\n        number\\n        ext\\n        region\\n        __typename\\n      }\\n      __typename\\n    }\\n    ccs {\\n      ...BasicUserProps\\n      phoneNumbers {\\n        id\\n        number\\n        ext\\n        region\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  voiceNumbers {\\n    id\\n    number\\n    country_code\\n    nickname\\n    outbound_calls_enabled\\n    __typename\\n  }\\n}\\n\\nfragment BasicUserProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  orgMember {\\n    id\\n    position\\n    isManager\\n    org {\\n      id\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":22,"time":40.17},"total":{"count":22,"time":40.17}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 735,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 902,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.099Z",
    time: 2710.3220000863075,
    timings: {
      blocked: 1.415999942779541,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.219,
      wait: 2705.348000097275,
      receive: 3.3390000462532043,
      _blocked_queueing: 1.184999942779541,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1475",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1475,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"GetTicketHeaderData","variables":{"ticketId":"2"},"query":"query GetTicketHeaderData($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    ...TicketHeaderInfoProps\\n    __typename\\n  }\\n}\\n\\nfragment TicketHeaderInfoProps on Ticket {\\n  id\\n  ref\\n  subject\\n  urgency\\n  myStar {\\n    color {\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  labels {\\n    ...LabelInfoProps\\n    __typename\\n  }\\n  status {\\n    ...TicketStatusInfoProps\\n    __typename\\n  }\\n  messages {\\n    totalCount\\n    __typename\\n  }\\n  lock {\\n    ...TicketLockProps\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment LabelInfoProps on LabelDef {\\n  color {\\n    ... on StandardColor {\\n      name\\n      __typename\\n    }\\n    ... on HexColor {\\n      hex\\n      __typename\\n    }\\n    __typename\\n  }\\n  id\\n  label\\n  __typename\\n}\\n\\nfragment TicketStatusInfoProps on TicketStatus {\\n  id\\n  status_type\\n  title\\n  effective_display_order\\n  parent {\\n    id\\n    title\\n    status_type\\n    __typename\\n  }\\n  children {\\n    id\\n    status_type\\n    title\\n    effective_display_order\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TicketLockProps on TicketLock {\\n  id\\n  agent {\\n    ...AgentInfoProps\\n    __typename\\n  }\\n  date\\n  __typename\\n}\\n\\nfragment AgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":20,"time":46.43},"total":{"count":20,"time":46.43}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 775,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 892,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.081Z",
    time: 2728.451000060886,
    timings: {
      blocked: 2.011000177025795,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.21600000000000003,
      wait: 2722.947000076875,
      receive: 3.276999806985259,
      _blocked_queueing: 1.705000177025795,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "446",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 446,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketAgent","variables":{"ticketId":"2"},"query":"query getTicketAgent($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    agent {\\n      ...AgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment AgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":17,"time":23.19},"total":{"count":17,"time":23.19}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 406,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 749,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.106Z",
    time: 2702.612000051886,
    timings: {
      blocked: 2.0130000768601892,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.21799999999999997,
      wait: 2696.98999999848,
      receive: 3.3909999765455723,
      _blocked_queueing: 1.7530000768601894,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "511",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 511,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketCCs","variables":{"ticketId":"2"},"query":"query getTicketCCs($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    ccs {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment BasicUserProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  orgMember {\\n    id\\n    position\\n    isManager\\n    org {\\n      id\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":14,"time":23.53},"total":{"count":14,"time":23.53}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 61,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 579,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.119Z",
    time: 2690.5359998345375,
    timings: {
      blocked: 1.097999968290329,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.251,
      wait: 2685.9740000809284,
      receive: 3.2129997853189707,
      _blocked_queueing: 0.851999968290329,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "351",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 351,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketLinkedProblems","variables":{"id":"2"},"query":"query getTicketLinkedProblems($id: ID!) {\\n  ticket(id: $id) {\\n    id\\n    problems {\\n      ...ProblemProps\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ProblemProps on TicketProblem {\\n  id\\n  title\\n  created\\n  is_open\\n  ticketsCount\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":15,"time":37.63},"total":{"count":15,"time":37.63}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 198,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 661,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.089Z",
    time: 2720.8279999904335,
    timings: {
      blocked: 1.9700000358819962,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.27199999999999996,
      wait: 2715.512000063494,
      receive: 3.0739998910576105,
      _blocked_queueing: 1.5030000358819962,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "458",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 458,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFollowers","variables":{"ticketId":"2"},"query":"query getTicketFollowers($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    followers {\\n      ...AgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment AgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":14,"time":29},"total":{"count":14,"time":29}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 67,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 580,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.111Z",
    time: 2698.607000056654,
    timings: {
      blocked: 1.1880000051856041,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.22299999999999998,
      wait: 2694.2870000198186,
      receive: 2.9090000316500664,
      _blocked_queueing: 0.9180000051856041,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "579",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 579,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketUsers","variables":{"ticketId":"2"},"query":"query getTicketUsers($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    ccs {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment BasicUserProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  orgMember {\\n    id\\n    position\\n    isManager\\n    org {\\n      id\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":18,"time":37.98},"total":{"count":18,"time":37.98}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 569,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 819,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.114Z",
    time: 2695.655000163242,
    timings: {
      blocked: 1.0280000912994147,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.23700000000000002,
      wait: 2691.5380000086575,
      receive: 2.8520000632852316,
      _blocked_queueing: 0.8070000912994146,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "299",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 299,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketEventInfo","variables":{"ticketId":"2"},"query":"query getTicketEventInfo($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    next_event {\\n      id\\n      type\\n      date\\n      __typename\\n    }\\n    date_created\\n    date_user_waiting\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":16,"time":36.81},"total":{"count":16,"time":36.81}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 165,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 649,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.113Z",
    time: 2695.7940000575036,
    timings: {
      blocked: 1.1300001085698606,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.162,
      wait: 2691.011999917045,
      receive: 3.490000031888485,
      _blocked_queueing: 0.9010001085698605,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "228",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 228,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"ticketBillingCount","variables":{"id":"2"},"query":"query ticketBillingCount($id: ID!) {\\n  ticket(id: $id) {\\n    id\\n    billingCharges {\\n      totalCount\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":15,"time":34.73},"total":{"count":15,"time":34.73}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 120,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 613,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.095Z",
    time: 2713.3969999849796,
    timings: {
      blocked: 1.1299999518841506,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.20199999999999999,
      wait: 2708.579000031665,
      receive: 3.4860000014305115,
      _blocked_queueing: 0.9109999518841505,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "6077",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 6077,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketVoiceCalls","variables":{"ticketId":"2"},"query":"query getTicketVoiceCalls($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    phoneCalls {\\n      ...VoicePhoneCall\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment VoicePhoneCall on VoicePhoneCall {\\n  id\\n  dateCreated\\n  logs {\\n    ...VoiceLogs\\n    __typename\\n  }\\n  number {\\n    id\\n    number\\n    __typename\\n  }\\n  numberPlain\\n  externalNumber\\n  externalNumberType\\n  person {\\n    ...BasicUserProps\\n    __typename\\n  }\\n  recordingEnabled\\n  ticket {\\n    id\\n    __typename\\n  }\\n  status\\n  bcVoiceActiveCallChannel {\\n    channel\\n    token\\n    __typename\\n  }\\n  bcVoiceOutgoingCallChannel {\\n    channel\\n    token\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment VoiceLogs on VoicePhoneCallLog {\\n  ... on VoicePhoneCallNewIncomingLog {\\n    dateCreated\\n    fromNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallNewOutgoingLog {\\n    dateCreated\\n    toNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallUserDisconnectedLog {\\n    dateCreated\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallUserJoinedLog {\\n    dateCreated\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallUserLeftLog {\\n    dateCreated\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallStartedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallEndedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallFailedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentInviteTimeoutLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantHoldLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantMutedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantUnholdLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantUnmutedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentCancelInviteLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentDisconnectedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentHangupLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentIgnoreInviteLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentInvitedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentJoinedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentLeftLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentTransferLog {\\n    dateCreated\\n    targetAgent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    inviteType\\n    __typename\\n  }\\n  ... on VoicePhoneCallQueueTransferLog {\\n    dateCreated\\n    targetQueue {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantTransferLog {\\n    dateCreated\\n    targetAutoAttendant {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAnsweredLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantExtensionLog {\\n    dateCreated\\n    enteredCode\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressExtensionKeyLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressKeyLog {\\n    dateCreated\\n    pressedKey\\n    nullableAgent: targetAgent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    nullableQueue: targetQueue {\\n      id\\n      name\\n      __typename\\n    }\\n    nullableAutoAttendant: targetAutoAttendant {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressRepeatKeyLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressUnsupportedKeyLog {\\n    dateCreated\\n    pressedKey\\n    __typename\\n  }\\n  ... on VoicePhoneCallRecordingDownloadedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallRecordingDeletedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallForwardAnsweredLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    forwardedNumber\\n    __typename\\n  }\\n  ... on VoicePhoneCallRejectedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallTargetLog {\\n    dateCreated\\n    nullableAgent: targetAgent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    nullableQueue: targetQueue {\\n      id\\n      name\\n      __typename\\n    }\\n    nullableAutoAttendant: targetAutoAttendant {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment VoiceAgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment BasicUserProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  orgMember {\\n    id\\n    position\\n    isManager\\n    org {\\n      id\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":37,"time":46.33},"total":{"count":37,"time":46.33}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 2349,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1387,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.087Z",
    time: 2901.9659999758005,
    timings: {
      blocked: 1.3149998224377633,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.21900000000000003,
      wait: 2899.1000000225754,
      receive: 1.3320001307874918,
      _blocked_queueing: 0.8939998224377632,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1084",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1084,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketLinkedTasks","variables":{"id":"2"},"query":"query getTicketLinkedTasks($id: ID!) {\\n  ticket(id: $id) {\\n    id\\n    tasks {\\n      ...TaskAndComments\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment TaskAndComments on Task {\\n  id\\n  title\\n  links {\\n    ... on TaskTicketLink {\\n      ticket {\\n        id\\n        subject\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  author {\\n    id\\n    display_name\\n    avatarUrn\\n    __typename\\n  }\\n  assigned {\\n    id\\n    display_name\\n    avatarUrn\\n    __typename\\n  }\\n  visibility\\n  comments {\\n    ...TaskCommentFragment\\n    __typename\\n  }\\n  assignedTeam {\\n    id\\n    name\\n    avatarUrn\\n    __typename\\n  }\\n  assignedDepartment {\\n    id\\n    title\\n    avatarUrn\\n    __typename\\n  }\\n  status\\n  date_due\\n  date_created\\n  date_completed\\n  is_completed\\n  __typename\\n}\\n\\nfragment TaskCommentFragment on TaskComment {\\n  id\\n  comment\\n  date_created\\n  author {\\n    id\\n    display_name\\n    avatarUrn\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":24,"time":46.48},"total":{"count":24,"time":46.48}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 2198,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1364,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.101Z",
    time: 2887.957999948412,
    timings: {
      blocked: 1.2510000997781754,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.194,
      wait: 2885.074000067249,
      receive: 1.4389997813850641,
      _blocked_queueing: 0.9610000997781754,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "7108",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 7108,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketFields","variables":{"ticketId":"2"},"query":"query getTicketFields($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    ref\\n    brand {\\n      ...BrandInfoProps\\n      __typename\\n    }\\n    department {\\n      id\\n      __typename\\n    }\\n    date_created\\n    language {\\n      id\\n      __typename\\n    }\\n    category {\\n      id\\n      __typename\\n    }\\n    priority {\\n      id\\n      __typename\\n    }\\n    product {\\n      id\\n      __typename\\n    }\\n    workflow {\\n      id\\n      __typename\\n    }\\n    fields {\\n      ...CustomFields\\n      __typename\\n    }\\n    organization {\\n      id\\n      __typename\\n    }\\n    person {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n  ticketDepartments {\\n    ...DepInfoProps\\n    __typename\\n  }\\n  languages {\\n    ...LangInfoProps\\n    __typename\\n  }\\n  ticketFieldDefs {\\n    ...FieldDefs\\n    __typename\\n  }\\n  organizationFieldDefs {\\n    ...FieldDefs\\n    __typename\\n  }\\n  userFieldDefs {\\n    ...FieldDefs\\n    __typename\\n  }\\n}\\n\\nfragment BrandInfoProps on Brand {\\n  id\\n  name\\n  iconUrl\\n  __typename\\n}\\n\\nfragment CustomFields on CustomValueType {\\n  ... on CustomChoiceValue {\\n    id\\n    def {\\n      ...ChoiceFieldDef\\n      __typename\\n    }\\n    selected {\\n      id\\n      title\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomDateValue {\\n    id\\n    def {\\n      ... on CustomDateDef {\\n        ...DateFieldDef\\n        __typename\\n      }\\n      ... on CustomDateTimeDef {\\n        ...DateTimeFieldDef\\n        __typename\\n      }\\n      __typename\\n    }\\n    date\\n    __typename\\n  }\\n  ... on CustomInputValue {\\n    id\\n    value\\n    def {\\n      ... on CustomCurrencyDef {\\n        ...CurrencyFieldDef\\n        __typename\\n      }\\n      ... on CustomTextareaDef {\\n        ...TextareaFieldDef\\n        __typename\\n      }\\n      ... on CustomTextDef {\\n        ...TextFieldDef\\n        __typename\\n      }\\n      ... on CustomUrlDef {\\n        ...UrlFieldDef\\n        __typename\\n      }\\n      ... on CustomNumberDef {\\n        ...NumberFieldDef\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomToggleValue {\\n    id\\n    def {\\n      ...ToggleFieldDef\\n      __typename\\n    }\\n    isChecked\\n    __typename\\n  }\\n  ... on CustomFileValue {\\n    id\\n    def {\\n      ...FileFieldDef\\n      __typename\\n    }\\n    files {\\n      id\\n      filesize\\n      filename\\n      content_type\\n      file_url\\n      download_url\\n      date_created\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomJavascriptValue {\\n    id\\n    value\\n    def {\\n      ...JavascriptFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomHiddenValue {\\n    id\\n    def {\\n      ...HiddenFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on CustomDisplayValue {\\n    id\\n    def {\\n      ...DisplayFieldDef\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ChoiceFieldDef on CustomChoiceDef {\\n  ...FieldDef\\n  options {\\n    id\\n    parent {\\n      id\\n      title\\n      __typename\\n    }\\n    children {\\n      id\\n      title\\n      __typename\\n    }\\n    title\\n    depth\\n    display_order\\n    effective_display_order\\n    __typename\\n  }\\n  choiceSettings: settings {\\n    style\\n    defaultOptionId\\n    userIsRequired\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment FieldDef on CustomFieldDef {\\n  __typename\\n  id\\n  title\\n  aliases\\n  description\\n  is_enabled\\n  display_order\\n  is_user_enabled\\n  is_agent_field\\n  defer_agent_validation\\n}\\n\\nfragment DateFieldDef on CustomDateDef {\\n  ...FieldDef\\n  dateSettings: settings {\\n    ...CustomDateSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CustomDateSettings on CustomDateSettings {\\n  defaultValue\\n  validWeekDays\\n  calendarType\\n  requireDateRange\\n  requireDateRangeDays\\n  userIsRequired\\n  agentIsRequired\\n  __typename\\n}\\n\\nfragment DateTimeFieldDef on CustomDateTimeDef {\\n  ...FieldDef\\n  dateSettings: settings {\\n    ...CustomDateSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CurrencyFieldDef on CustomCurrencyDef {\\n  ...FieldDef\\n  currencySettings: settings {\\n    currency {\\n      symbol\\n      decimal_places\\n      __typename\\n    }\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TextareaFieldDef on CustomTextareaDef {\\n  ...FieldDef\\n  textSettings: settings {\\n    ...CustomTextSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment CustomTextSettings on CustomTextSettings {\\n  defaultValue\\n  parseLinks\\n  userValidation {\\n    minLength\\n    maxLength\\n    regexPattern\\n    regexRequired\\n    __typename\\n  }\\n  agentValidation {\\n    minLength\\n    maxLength\\n    regexPattern\\n    regexRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TextFieldDef on CustomTextDef {\\n  ...FieldDef\\n  textSettings: settings {\\n    ...CustomTextSettings\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment UrlFieldDef on CustomUrlDef {\\n  ...FieldDef\\n  urlSettings: settings {\\n    allowNetworkLinks\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment NumberFieldDef on CustomNumberDef {\\n  ...FieldDef\\n  numberSettings: settings {\\n    defaultValue\\n    max\\n    min\\n    isSelect\\n    userIsRequired\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ToggleFieldDef on CustomToggleDef {\\n  ...FieldDef\\n  toggleSettings: settings {\\n    defaultState\\n    checkboxLabel\\n    uncheckedDisplayLabel\\n    agentIsRequired\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment FileFieldDef on CustomFileDef {\\n  ...FieldDef\\n  fileSettings: settings {\\n    allowMultiple\\n    agentValidation {\\n      onlyAllowExt\\n      onlyRejectExt\\n      isRequired\\n      maxFileSize\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment JavascriptFieldDef on CustomJavascriptDef {\\n  ...FieldDef\\n  javascriptSettings: settings {\\n    code\\n    defaultValue\\n    parseLinks\\n    agentValidation {\\n      minLength\\n      maxLength\\n      regexPattern\\n      regexRequired\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment HiddenFieldDef on CustomHiddenDef {\\n  ...FieldDef\\n  hiddenSettings: settings {\\n    defaultValue\\n    cookieVariable\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DisplayFieldDef on CustomDisplayDef {\\n  ...FieldDef\\n  displaySettings: settings {\\n    html\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment DepInfoProps on TicketDepartment {\\n  id\\n  title\\n  avatarUrn\\n  parent {\\n    id\\n    title\\n    avatarUrn\\n    __typename\\n  }\\n  children {\\n    id\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment LangInfoProps on Language {\\n  id\\n  flagUrn\\n  title\\n  locale\\n  __typename\\n}\\n\\nfragment FieldDefs on CustomFieldDef {\\n  id\\n  ...ChoiceFieldDef\\n  ...DisplayFieldDef\\n  ...HiddenFieldDef\\n  ...JavascriptFieldDef\\n  ...DateFieldDef\\n  ...DateTimeFieldDef\\n  ...FileFieldDef\\n  ...TextFieldDef\\n  ...TextareaFieldDef\\n  ...UrlFieldDef\\n  ...CurrencyFieldDef\\n  ...ToggleFieldDef\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:29 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":49,"time":55.29},"total":{"count":49,"time":55.29}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 61097,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 8570,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.105Z",
    time: 2885.491000022739,
    timings: {
      blocked: 1.9460000399649142,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.33899999999999997,
      wait: 2880.7609999917895,
      receive: 2.4449999909847975,
      _blocked_queueing: 1.6870000399649143,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "562",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 562,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketStatusInfo","variables":{"ticketId":"2"},"query":"query getTicketStatusInfo($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    urgency\\n    status {\\n      ...TicketStatusInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment TicketStatusInfoProps on TicketStatus {\\n  id\\n  status_type\\n  title\\n  effective_display_order\\n  parent {\\n    id\\n    title\\n    status_type\\n    __typename\\n  }\\n  children {\\n    id\\n    status_type\\n    title\\n    effective_display_order\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:30 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":14,"time":18.38},"total":{"count":14,"time":18.38}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 385,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 697,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:29.246Z",
    time: 931.3079998828471,
    timings: {
      blocked: 1.152000005185604,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.158,
      wait: 927.4689999455511,
      receive: 2.5289999321103096,
      _blocked_queueing: 0.9180000051856041,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "12453",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 12453,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getTicketMessages","variables":{"ticketId":"2"},"query":"query getTicketMessages($ticketId: ID!, $after: String) {\\n  ticket(id: $ticketId) {\\n    id\\n    messages(first: 15, after: $after, order: DESC) {\\n      totalCount\\n      edges {\\n        message {\\n          ...TicketMessageFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      pageInfo {\\n        endCursor\\n        hasNextPage\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment TicketMessageFragment on TicketMessage {\\n  ... on TicketMessageAgent {\\n    id\\n    messageNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    message\\n    messageSource\\n    date_created\\n    creationSystem\\n    emailDetails {\\n      toEmailAddress\\n      fromEmailAddress\\n      subject\\n      __typename\\n    }\\n    clientDetails {\\n      ipAddress\\n      hostname\\n      geoCountry\\n      __typename\\n    }\\n    attachments {\\n      ...ticketMessageAttachmentFragment\\n      __typename\\n    }\\n    feedbacks {\\n      id\\n      rating\\n      message\\n      date_created\\n      author {\\n        avatarUrn\\n        name\\n        __typename\\n      }\\n      __typename\\n    }\\n    primaryTranslation {\\n      message\\n      language {\\n        flagUrn\\n        title\\n        __typename\\n      }\\n      fromLanguage {\\n        title\\n        flagUrn\\n        __typename\\n      }\\n      __typename\\n    }\\n    emailDetails {\\n      subject\\n      toEmailAddress\\n      fromEmailAddress\\n      __typename\\n    }\\n    forwards(first: 15, order: ASC) {\\n      edges {\\n        ...messageForwardEdge\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on TicketMessageAgentNote {\\n    id\\n    messageNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    message\\n    messageSource\\n    date_created\\n    creationSystem\\n    emailDetails {\\n      toEmailAddress\\n      fromEmailAddress\\n      subject\\n      __typename\\n    }\\n    clientDetails {\\n      ipAddress\\n      hostname\\n      geoCountry\\n      __typename\\n    }\\n    feedbacks {\\n      id\\n      rating\\n      message\\n      date_created\\n      author {\\n        avatarUrn\\n        name\\n        __typename\\n      }\\n      __typename\\n    }\\n    attachments {\\n      ...ticketMessageAttachmentFragment\\n      __typename\\n    }\\n    primaryTranslation {\\n      message\\n      language {\\n        flagUrn\\n        title\\n        __typename\\n      }\\n      fromLanguage {\\n        title\\n        flagUrn\\n        __typename\\n      }\\n      __typename\\n    }\\n    emailDetails {\\n      subject\\n      toEmailAddress\\n      fromEmailAddress\\n      __typename\\n    }\\n    forwards(first: 15, order: ASC) {\\n      edges {\\n        ...messageForwardEdge\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on TicketMessageUser {\\n    id\\n    isHidden\\n    messageNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    message\\n    messageSource\\n    date_created\\n    creationSystem\\n    emailDetails {\\n      toEmailAddress\\n      fromEmailAddress\\n      subject\\n      __typename\\n    }\\n    clientDetails {\\n      ipAddress\\n      hostname\\n      geoCountry\\n      __typename\\n    }\\n    attachments {\\n      ...ticketMessageAttachmentFragment\\n      __typename\\n    }\\n    emailRecipients {\\n      type\\n      email\\n      person {\\n        id\\n        avatarUrn\\n        name\\n        __typename\\n      }\\n      __typename\\n    }\\n    primaryTranslation {\\n      message\\n      language {\\n        flagUrn\\n        title\\n        __typename\\n      }\\n      fromLanguage {\\n        title\\n        flagUrn\\n        __typename\\n      }\\n      __typename\\n    }\\n    emailDetails {\\n      subject\\n      toEmailAddress\\n      fromEmailAddress\\n      __typename\\n    }\\n    isHidden\\n    forwards(first: 15, order: ASC) {\\n      edges {\\n        ...messageForwardEdge\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on TicketMessageVoice {\\n    id\\n    messageNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    message\\n    date_created\\n    creationSystem\\n    call {\\n      id\\n      timeToNow\\n      dateCreated\\n      dateStarted\\n      dateEnded\\n      person {\\n        id\\n        name\\n        primary_email\\n        __typename\\n      }\\n      participants {\\n        __typename\\n        ... on VoicePhoneCallAgentParticipant {\\n          agent {\\n            ...VoiceAgentInfoProps\\n            __typename\\n          }\\n          data {\\n            name\\n            value\\n            __typename\\n          }\\n          __typename\\n        }\\n        ... on VoicePhoneCallUserParticipant {\\n          person {\\n            ...BasicUserProps\\n            __typename\\n          }\\n          data {\\n            name\\n            value\\n            __typename\\n          }\\n          __typename\\n        }\\n      }\\n      status\\n      type\\n      externalNumber\\n      externalNumberType\\n      number {\\n        id\\n        number\\n        __typename\\n      }\\n      numberPlain\\n      duration\\n      recordingEnabled\\n      fullRecording {\\n        blob {\\n          id\\n          download_url\\n          filesize\\n          __typename\\n        }\\n        __typename\\n      }\\n      costCurrency\\n      cost\\n      ticket {\\n        id\\n        __typename\\n      }\\n      agentVoicemail {\\n        duration\\n        blob {\\n          id\\n          download_url\\n          filesize\\n          __typename\\n        }\\n        transcription\\n        __typename\\n      }\\n      logs {\\n        ...VoiceLogs\\n        __typename\\n      }\\n      __typename\\n    }\\n    attachments {\\n      ...ticketMessageAttachmentFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on TicketMessageChat {\\n    id\\n    messageNumber\\n    chat {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment VoiceLogs on VoicePhoneCallLog {\\n  ... on VoicePhoneCallNewIncomingLog {\\n    dateCreated\\n    fromNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallNewOutgoingLog {\\n    dateCreated\\n    toNumber\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallUserDisconnectedLog {\\n    dateCreated\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallUserJoinedLog {\\n    dateCreated\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallUserLeftLog {\\n    dateCreated\\n    person {\\n      ...BasicUserProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallStartedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallEndedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallFailedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentInviteTimeoutLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantHoldLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantMutedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantUnholdLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallParticipantUnmutedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentCancelInviteLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentDisconnectedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentHangupLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentIgnoreInviteLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentInvitedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentJoinedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentLeftLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAgentTransferLog {\\n    dateCreated\\n    targetAgent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    inviteType\\n    __typename\\n  }\\n  ... on VoicePhoneCallQueueTransferLog {\\n    dateCreated\\n    targetQueue {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantTransferLog {\\n    dateCreated\\n    targetAutoAttendant {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAnsweredLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantExtensionLog {\\n    dateCreated\\n    enteredCode\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressExtensionKeyLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressKeyLog {\\n    dateCreated\\n    pressedKey\\n    nullableAgent: targetAgent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    nullableQueue: targetQueue {\\n      id\\n      name\\n      __typename\\n    }\\n    nullableAutoAttendant: targetAutoAttendant {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressRepeatKeyLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallAutoAttendantPressUnsupportedKeyLog {\\n    dateCreated\\n    pressedKey\\n    __typename\\n  }\\n  ... on VoicePhoneCallRecordingDownloadedLog {\\n    dateCreated\\n    __typename\\n  }\\n  ... on VoicePhoneCallRecordingDeletedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallForwardAnsweredLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    forwardedNumber\\n    __typename\\n  }\\n  ... on VoicePhoneCallRejectedLog {\\n    dateCreated\\n    agent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on VoicePhoneCallTargetLog {\\n    dateCreated\\n    nullableAgent: targetAgent {\\n      ...VoiceAgentInfoProps\\n      __typename\\n    }\\n    nullableQueue: targetQueue {\\n      id\\n      name\\n      __typename\\n    }\\n    nullableAutoAttendant: targetAutoAttendant {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment messageForwardEdge on PagedTicketMessageForwardsEdge {\\n  cursor\\n  forward {\\n    id\\n    subject\\n    tos {\\n      email\\n      person {\\n        id\\n        display_name\\n        avatarUrn\\n        primary_email\\n        __typename\\n      }\\n      __typename\\n    }\\n    ccs {\\n      email\\n      person {\\n        id\\n        display_name\\n        avatarUrn\\n        primary_email\\n        __typename\\n      }\\n      __typename\\n    }\\n    bccs {\\n      email\\n      person {\\n        id\\n        display_name\\n        avatarUrn\\n        primary_email\\n        __typename\\n      }\\n      __typename\\n    }\\n    from {\\n      email\\n      person {\\n        id\\n        emails\\n        avatarUrn\\n        display_name\\n        __typename\\n      }\\n      __typename\\n    }\\n    message\\n    blobs {\\n      id\\n      __typename\\n    }\\n    ticket {\\n      id\\n      __typename\\n    }\\n    newTicket {\\n      id\\n      __typename\\n    }\\n    date_created\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment VoiceAgentInfoProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  teams {\\n    id\\n    avatarUrn\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ticketMessageAttachmentFragment on TicketAttachment {\\n  id\\n  is_inline\\n  filesize\\n  filename\\n  content_type\\n  downloadUrl\\n  file_url\\n  __typename\\n}\\n\\nfragment BasicUserProps on UserInfo {\\n  id\\n  avatarUrn\\n  display_name\\n  name\\n  first_name\\n  last_name\\n  primary_email\\n  orgMember {\\n    id\\n    position\\n    isManager\\n    org {\\n      id\\n      avatarUrn\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:30 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":104,"time":75.97},"total":{"count":104,"time":75.97}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 33700,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 8575,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.117Z",
    time: 3061.522000003606,
    timings: {
      blocked: 1.152000005185604,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.24199999999999997,
      wait: 3056.4829999504386,
      receive: 3.645000047981739,
      _blocked_queueing: 0.9180000051856041,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "1436",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 1436,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"getLinkedTickets","variables":{"ticketId":"2"},"query":"query getLinkedTickets($ticketId: ID!) {\\n  ticket(id: $ticketId) {\\n    id\\n    status {\\n      id\\n      status_type\\n      parent {\\n        id\\n        __typename\\n      }\\n      title\\n      __typename\\n    }\\n    links {\\n      parent {\\n        ...ticketCardFragment\\n        __typename\\n      }\\n      children {\\n        tickets {\\n          ...ticketCardFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      siblings {\\n        tickets {\\n          ...ticketCardFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ticketCardFragment on Ticket {\\n  id\\n  __typename\\n  subject\\n  urgency\\n  status {\\n    id\\n    status_type\\n    parent {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n  organization {\\n    id\\n    __typename\\n  }\\n  department {\\n    id\\n    title\\n    avatarUrn\\n    __typename\\n  }\\n  agent {\\n    id\\n    display_name\\n    avatarUrn\\n    __typename\\n  }\\n  person {\\n    id\\n    display_name\\n    avatarUrn\\n    primary_email\\n    orgMember {\\n      id\\n      org {\\n        id\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  links {\\n    parent {\\n      id\\n      subject\\n      __typename\\n    }\\n    __typename\\n  }\\n  ccs {\\n    id\\n    __typename\\n  }\\n  date_last_log_action\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:30 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":29,"time":23.33},"total":{"count":29,"time":23.33}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 1220,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 1036,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:27.122Z",
    time: 3442.06800009124,
    timings: {
      blocked: 1.3450000877678394,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.246,
      wait: 3436.414000032261,
      receive: 4.062999971210957,
      _blocked_queueing: 0.9900000877678394,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "eventsource",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "GET",
      url: "https://master.next.deskprodemo.com/sys/services/broadcaster/93c1e911-9953-41de-af13-2dde59c008e9/events?a=vSDqkI3RQYkDErzK8v7HK5AwguhFrg",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "GET",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value:
            "/sys/services/broadcaster/93c1e911-9953-41de-af13-2dde59c008e9/events?a=vSDqkI3RQYkDErzK8v7HK5AwguhFrg",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "text/event-stream",
        },
        {
          name: "cache-control",
          value: "no-cache",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [
        {
          name: "a",
          value: "vSDqkI3RQYkDErzK8v7HK5AwguhFrg",
        },
      ],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 0,
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:22 GMT",
        },
        {
          name: "content-type",
          value: "text/event-stream; charset=UTF-8",
        },
        {
          name: "cache-control",
          value: "no-store, private",
        },
        {
          name: "access-control-allow-origin",
          value: "",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
      ],
      cookies: [],
      content: {
        size: 215,
        mimeType: "text/event-stream",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 590,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:22.337Z",
    time: 10058.556000003591,
    timings: {
      blocked: 1.3859999222904444,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.36699999999999994,
      wait: 356.31899993491174,
      receive: 9700.484000146389,
      _blocked_queueing: 1.0599999222904444,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
  {
    _initiator: null,
    _priority: "High",
    _resourceType: "fetch",
    cache: {},
    connection: "1227014",
    pageref: "page_1",
    request: {
      method: "POST",
      url: "https://master.next.deskprodemo.com/agent-api/graphql",
      httpVersion: "http/2.0",
      headers: [
        {
          name: ":method",
          value: "POST",
        },
        {
          name: ":authority",
          value: "master.next.deskprodemo.com",
        },
        {
          name: ":scheme",
          value: "https",
        },
        {
          name: ":path",
          value: "/agent-api/graphql",
        },
        {
          name: "content-length",
          value: "199",
        },
        {
          name: "sec-ch-ua",
          value:
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        },
        {
          name: "accept",
          value: "*/*",
        },
        {
          name: "x-requested-with",
          value: "XMLHttpRequest",
        },
        {
          name: "sec-ch-ua-mobile",
          value: "?0",
        },
        {
          name: "user-agent",
          value:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        },
        {
          name: "x-test-deskpro-user-context",
          value: "1",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "sec-fetch-site",
          value: "same-origin",
        },
        {
          name: "sec-fetch-mode",
          value: "cors",
        },
        {
          name: "sec-fetch-dest",
          value: "empty",
        },
        {
          name: "referer",
          value:
            "https://master.next.deskprodemo.com/agent-ui/app/?USE_TEST_USER_CONTEXT=1",
        },
        {
          name: "accept-encoding",
          value: "gzip, deflate, br",
        },
        {
          name: "accept-language",
          value: "en-GB,en-US;q=0.9,en;q=0.8",
        },
        {
          name: "cookie",
          value:
            "dpsid-agent=h-YGA9Y4H2DNQQS5M; dp_last_lang=fr; dp__v=27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
        },
      ],
      queryString: [],
      cookies: [
        {
          name: "dpsid-agent",
          value: "h-YGA9Y4H2DNQQS5M",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp_last_lang",
          value: "fr",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "1969-12-31T23:59:59.000Z",
          httpOnly: true,
          secure: false,
        },
        {
          name: "dp__v",
          value: "27061029-WG6TY7EE-733Y18FI-3Q8G8Q-PPZ",
          path: "/",
          domain: "master.next.deskprodemo.com",
          expires: "2026-06-14T09:08:24.387Z",
          httpOnly: false,
          secure: false,
        },
      ],
      headersSize: -1,
      bodySize: 199,
      postData: {
        mimeType: "application/json",
        text: '{"operationName":"heartbeatMessengerAndVoice","variables":{"enableVoice":true},"query":"mutation heartbeatMessengerAndVoice($enableVoice: Boolean) {\\n  heartbeat(voiceSocketOpen: $enableVoice)\\n}\\n"}',
      },
    },
    response: {
      status: 200,
      statusText: "",
      httpVersion: "http/2.0",
      headers: [
        {
          name: "server",
          value: "nginx/1.17.6",
        },
        {
          name: "date",
          value: "Fri, 25 Jun 2021 08:41:33 GMT",
        },
        {
          name: "content-type",
          value: "application/json",
        },
        {
          name: "vary",
          value: "Accept-Encoding",
        },
        {
          name: "cache-control",
          value: "no-cache, private",
        },
        {
          name: "x-debug-query",
          value:
            '{"select":{"count":6,"time":12.08},"update":{"count":1,"time":0.74},"total":{"count":7,"time":12.82}}',
        },
        {
          name: "access-control-allow-origin",
          value: "https://master.next.deskprodemo.com",
        },
        {
          name: "access-control-allow-methods",
          value: "GET, POST, OPTIONS",
        },
        {
          name: "access-control-allow-credentials",
          value: "true",
        },
        {
          name: "access-control-allow-headers",
          value:
            "X-Requested-With, Content-Type, X-Test-Deskpro-User-Context, Cookie, Authorization",
        },
        {
          name: "x-deskpro-version",
          value: "0.0.0+DEV",
        },
        {
          name: "x-frame-options",
          value: "SAMEORIGIN",
        },
        {
          name: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          name: "x-content-type-options",
          value: "nosniff",
        },
        {
          name: "content-encoding",
          value: "gzip",
        },
      ],
      cookies: [],
      content: {
        size: 27,
        mimeType: "application/json",
      },
      redirectURL: "",
      headersSize: -1,
      bodySize: -1,
      _transferSize: 580,
      _error: null,
    },
    serverIPAddress: "95.217.72.246",
    startedDateTime: "2021-06-25T08:41:32.842Z",
    time: 634.7989998757839,
    timings: {
      blocked: 1.1159998171776533,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.32500000000000007,
      wait: 633.0520000568778,
      receive: 0.3060000017285347,
      _blocked_queueing: 0.7709998171776533,
    },
    responseContent: {
      content: "",
      encoding: "",
    },
  },
] as unknown as NetworkRequest[];
