package co.edu.book;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BookDAO extends co.edu.book.DAO {

	// 전체 리스트 조회
	public List<BookVO> bookList() {
		getConnect();
		List<BookVO> list = new ArrayList<>();

		try {
			psmt = conn.prepareStatement("select * from book order by book_code");
			rs = psmt.executeQuery();

			while (rs.next()) {
				BookVO bk = new BookVO();
				bk.setBkCode(rs.getString("book_code"));
				bk.setBkTitle(rs.getString("book_name"));
				bk.setWriter(rs.getString("book_auth"));
				bk.setPub(rs.getString("book_pres"));
				bk.setPr(rs.getInt("book_amt"));

				list.add(bk);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}

	// 데이터 입력
	public BookVO insertBook(BookVO vo) {
		getConnect();
		String sql = "insert into book(book_code, book_name, book_auth, book_pres, book_amt) values(?,?,?,?,?)";

		try {
			psmt = conn.prepareStatement(sql);
			
			psmt.setString(1, vo.getBkCode());
			psmt.setString(2, vo.getBkTitle());
			psmt.setString(3, vo.getWriter());
			psmt.setString(4, vo.getPub());
			psmt.setInt(5, vo.getPr());

			int r = psmt.executeUpdate();
			System.out.println(r + "건 입력");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return vo;
	}

	// 데이터 삭제
	public boolean deleteBook(String book_code) {
		getConnect();
		String sql = "delete from book where book_code = ?";

		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, book_code);

			int r = psmt.executeUpdate();
			System.out.println(r + "건 삭제");
			if (r > 0) {
				return true;
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return false;
	}

}
