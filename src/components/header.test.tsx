import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const navigationLinks = [
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
] as const;

function renderHeader() {
  return render(
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <Header />
    </ThemeProvider>,
  );
}

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

afterAll(() => {
  vi.restoreAllMocks();
});

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.removeAttribute("class");
  document.documentElement.removeAttribute("style");
});

describe("Header", () => {
  it("renders the header and theme toggle", () => {
    renderHeader();

    expect(screen.getByRole("banner")).toBeDefined();
    expect(
      screen.getByRole("link", { name: "Hawwka" }).getAttribute("href"),
    ).toBe("/");
    expect(screen.getByRole("button", { name: "Toggle theme" })).toBeDefined();
  });

  it("renders desktop navigation links with the correct hrefs", () => {
    renderHeader();

    const navigation = screen.getByRole("navigation", { name: "Primary" });

    navigationLinks.forEach(([label, href]) => {
      expect(
        within(navigation)
          .getByRole("link", { name: label })
          .getAttribute("href"),
      ).toBe(href);
    });
  });

  it("opens the mobile drawer with matching navigation links", () => {
    renderHeader();

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));

    const drawer = screen.getByRole("dialog", { name: "Mobile navigation" });
    const navigation = within(drawer).getByRole("navigation", {
      name: "Mobile primary",
    });

    navigationLinks.forEach(([label, href]) => {
      expect(
        within(navigation)
          .getByRole("link", { name: label })
          .getAttribute("href"),
      ).toBe(href);
    });

    fireEvent.click(within(drawer).getByRole("button", { name: "Close menu" }));

    expect(
      screen.queryByRole("dialog", { name: "Mobile navigation" }),
    ).toBeNull();
  });

  it("toggles the document theme class", async () => {
    renderHeader();

    fireEvent.click(screen.getByRole("button", { name: "Toggle theme" }));

    await waitFor(() => {
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });
  });
});
