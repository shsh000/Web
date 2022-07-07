package co.edu.book;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet("/book")
public class BookServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public BookServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// 응답정보에 있는 한글 처리
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");

		String cmd = request.getParameter("cmd");
		Gson gson = new GsonBuilder().create();
		BookDAO dao = new BookDAO();

		if (cmd.equals("list")) {
			List<BookVO> list = dao.bookList();
			response.getWriter().print(gson.toJson(list));
			
		} else if (cmd.equals("insert")) {
			String bkCode = request.getParameter("bkCode");
			String bkTitle = request.getParameter("bkTitle");
			String writer = request.getParameter("writer");
			String pub = request.getParameter("pub");
			String pr = request.getParameter("pr");

			BookVO vo = new BookVO();
			vo.setBkCode(bkCode);
			vo.setBkTitle(bkTitle);
			vo.setWriter(writer);
			vo.setPub(pub);
			vo.setPr(Integer.parseInt(pr));
			dao.insertBook(vo);
			response.getWriter().print(gson.toJson(vo));
			
		} else if (cmd.equals("delete")) {
			String delCode = request.getParameter("delCode");
			PrintWriter out = response.getWriter();

			if (dao.deleteBook(delCode)) {
				out.print("{\"retCode\":\"Success\"}");
			} else {
				out.print("{\"retCode\":\"Fail\"}");
			}
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// 한글 처리
		request.setCharacterEncoding("utf-8"); // 요청정보에 한글이 있으면 처리
		response.setCharacterEncoding("utf-8"); // 응답정보에 한글이 있으면 처리
		response.setContentType("text/json;charset=utf-8");

		String cmd = request.getParameter("cmd");
		String bkCode = request.getParameter("bkCode");
		String bkTitle = request.getParameter("bkTitle");
		String writer = request.getParameter("writer");
		String pub = request.getParameter("pub");
		String pr = request.getParameter("pr");
//		System.out.println(pr);

		BookVO vo = new BookVO();
		vo.setBkCode(bkCode);
		vo.setBkTitle(bkTitle);
		vo.setWriter(writer);
		vo.setPub(pub);
		vo.setPr(Integer.parseInt(pr));

		BookDAO dao = new BookDAO();

		Gson gson = new GsonBuilder().create();

		PrintWriter out = response.getWriter();

		// 입력
		if (cmd.equals("add")) {
			dao.insertBook(vo);
			out.print(gson.toJson(vo));

			// 삭제
		} else if (cmd.equals("remove")) {
			String delCode = request.getParameter("delCode");

			if (dao.deleteBook(delCode)) {
				out.print("{\"retCode\":\"Success\"}");
			} else {
				out.print("{\"retCode\":\"Fail\"}");
			}
		}
	}

}
