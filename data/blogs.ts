export interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
  // Optional richer content for detail pages
  fullImage?: string;
  sections?: {
    title: string;
    image?: string;
    points?: string[];
    code?: string;
    language?: string;
  }[];
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Two Sum",
    image: "/images/blogs/2sum/twoSum1.png",
    fullImage: "/images/blogs/2sum/twoSumP.png",
    description: "Find indices of two numbers in an array that add up to a target.",
    sections: [
      {
        title: "Approach 1: Brute Force",
        image: "/images/blogs/2sum/twoSum1.png",
        points: [
          "Rules:",
          "Each element can be used only once",
          "Exactly one valid answer exists",
          "Approach:",
          "Check every possible pair in the array to see if their sum equals the target.",
          "Use two loops to pick two different numbers.",
          "Check if their sum equals the target.",
          "Return their indices when found.",
          "Time: O(n²), Space: O(1).",
          "This approach works but becomes slow for large arrays."
        ],
        code: `
class Solution {

public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] == target) {
                    return {i, j};
                }
            }
        }
        return {}; // guaranteed one solution
    }
};
`,
        language: "c++"
      },
      {
        title: "Optimized Approach",
        image: "/images/blogs/2sum/twoSum.png",
        points: [
          "Use a hash map to record seen values.",
          "Achieves O(n) time by trading space for speed.",
          "Preferred for larger inputs where performance matters."
        ],
        code: `class Solution {

public:
    vector<int> twoSum(vector<int>& nums, int target) {
      unordered_map<int, int> m;
      vector <int> ans;

      for (int i=0; i <nums.size(); i++){
        int first = nums[i];
        int sec = target - first;

        if( m.find(sec) != m.end()){
            ans.push_back(i);
            ans.push_back(m[sec]);
        }
        m[first] = i;
      }
      return ans;
    }
};
`,
        language: "c++"
      }
    ]
  },

];

export default blogs;
